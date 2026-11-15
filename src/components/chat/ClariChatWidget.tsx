"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  RotateCcw,
  Stethoscope,
  Calendar,
  ArrowRight,
  Bot,
  User,
} from "lucide-react";
import { useBookModal } from "@/components/clearnyx/BookModalContext";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
  action?: string;
}

export function ClariChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Welcome to **CLEARNYX**. I am **Clari**, your clinical concierge.\n\nWhether you are a practicing dentist exploring our B2B orthodontic manufacturing lab or a patient seeking a clear smile journey, how may I assist you today?",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { openModal } = useBookModal();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      const data = await res.json();

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content:
          data?.reply ||
          "I apologize, I didn't receive a complete response. Please try again or reach our team at info@clearnyx.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: data?.action,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMessage: Message = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content:
          "Our clinical network is temporarily busy. You can explore our [Doctor Portal](/for-dentists) or contact our desk directly at partners@clearnyx.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          "Conversation cleared. I am **Clari**. How can I assist you regarding CLEARNYX orthodontic systems?",
        timestamp: "Just now",
      },
    ]);
  };

  // Comprehensive, clean Markdown parser for clear visual presentation
  const renderFormattedText = (content: string) => {
    const lines = content.split("\n");
    return lines.map((rawLine, idx) => {
      const line = rawLine.trim();

      if (!line) {
        return <div key={idx} className="h-2" />;
      }

      // Format bold, italic, and links inline
      let parsed = line
        .replace(/\*\*(.*?)\*\*/g, "<strong class='font-bold text-[#071B2C]'>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em class='text-slate-600'>$1</em>")
        .replace(
          /\[(.*?)\]\((.*?)\)/g,
          '<a href="$2" class="text-[#00A6CE] font-bold underline decoration-[#00A6CE]/30 hover:decoration-[#00A6CE] transition-colors">$1</a>'
        );

      // Section Headings (###)
      if (line.startsWith("### ")) {
        return (
          <h4
            key={idx}
            className="text-[12px] font-bold uppercase tracking-wider text-[#071B2C] mt-3 mb-1.5 border-b border-[#EAEFF3] pb-1"
            dangerouslySetInnerHTML={{ __html: parsed.replace("### ", "") }}
          />
        );
      }

      // Bullet points with * or -
      if (line.startsWith("* ") || line.startsWith("- ")) {
        const bulletText = parsed.replace(/^[\*\-]\s+/, "");
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] shrink-0 mt-1.5" />
            <span
              className="text-xs text-[#415360] leading-relaxed flex-1"
              dangerouslySetInnerHTML={{ __html: bulletText }}
            />
          </div>
        );
      }

      // Regular paragraph
      return (
        <p
          key={idx}
          className="text-xs text-[#334756] leading-relaxed my-1"
          dangerouslySetInnerHTML={{ __html: parsed }}
        />
      );
    });
  };

  return (
    <>
      {/* 1. Floating Pill Trigger - Positioned on the LEFT SIDE */}
      <div className="fixed bottom-20 sm:bottom-6 left-5 sm:left-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-3 p-2 pl-2.5 pr-4 rounded-full bg-white/95 backdrop-blur-xl border border-[#D0DFE8] shadow-[0_12px_32px_rgba(7,27,44,0.12)] hover:shadow-[0_16px_40px_rgba(0,166,206,0.22)] hover:border-[#00A6CE]/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
                aria-label="Open Clari Clinical Concierge"
              >
                {/* Visual Avatar Monogram */}
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#071B2C] via-[#0A2E4C] to-[#00A6CE] text-white flex items-center justify-center font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
                    <span>C</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors leading-tight">
                      Clari
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#00A6CE] px-1.5 py-0.2 rounded-full bg-[#E7F6FA]">
                      Online
                    </span>
                  </div>
                  <span className="text-[11px] text-[#556977] leading-tight font-medium">
                    Clinical Concierge
                  </span>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. Bespoke Concierge Window - Positioned on the LEFT SIDE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[410px] h-[580px] max-h-[85vh] z-50 rounded-[28px] bg-white shadow-[0_24px_70px_rgba(7,27,44,0.2),0_0_0_1px_rgba(7,27,44,0.06)] border border-[#E2EBF0] flex flex-col overflow-hidden"
          >
            {/* Elegant Header */}
            <div className="bg-gradient-to-b from-[#F9FCFD] to-white px-5 py-4 flex items-center justify-between border-b border-[#EAEFF3] shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#071B2C] to-[#00A6CE] text-white flex items-center justify-center font-bold text-base shadow-sm">
                    C
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[15px] text-[#071B2C] leading-tight">
                    Clari
                  </h3>
                  <p className="text-[11px] font-medium text-[#556977] mt-0.5">
                    CLEARNYX Clinical Concierge
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2 text-slate-400 hover:text-[#071B2C] rounded-full hover:bg-slate-100 transition-colors"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-[#071B2C] rounded-full hover:bg-slate-100 transition-colors"
                  title="Close concierge"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Stream */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-[#FCFDFE]">
              {messages.map((msg) => {
                const isAssistant = msg.role === "assistant";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      isAssistant ? "items-start" : "items-end"
                    }`}
                  >
                    {/* User Question View */}
                    {!isAssistant ? (
                      <div className="flex flex-col items-end max-w-[85%]">
                        <div className="bg-[#071B2C] text-white px-4 py-2.5 rounded-[20px] rounded-br-[4px] shadow-sm">
                          <p className="text-xs leading-relaxed text-white font-normal break-words">
                            {msg.content}
                          </p>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 px-1 font-mono">
                          {msg.timestamp}
                        </span>
                      </div>
                    ) : (
                      /* Assistant Clari Response View */
                      <div className="flex items-start gap-2.5 max-w-[90%]">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#071B2C] to-[#00A6CE] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-1 shadow-xs">
                          C
                        </div>

                        <div className="bg-white border border-[#E2EBF0] text-[#071B2C] rounded-[20px] rounded-tl-[4px] p-4 shadow-[0_2px_8px_rgba(7,27,44,0.04)] flex-1">
                          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#F0F4F7]">
                            <span className="text-[11px] font-bold text-[#071B2C] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Clari
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              {msg.timestamp}
                            </span>
                          </div>

                          <div className="space-y-1">
                            {renderFormattedText(msg.content)}
                          </div>

                          {/* Contextual Action Buttons */}
                          {msg.action === "consultation" && (
                            <div className="mt-3 pt-3 border-t border-[#EAEFF3]">
                              <button
                                type="button"
                                onClick={() => {
                                  openModal("consultation");
                                  setIsOpen(false);
                                }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00A6CE] to-[#0094BA] text-white font-bold text-xs hover:shadow-md hover:brightness-105 transition-all cursor-pointer"
                              >
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Book Doctor Consultation</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          )}

                          {msg.action === "partner" && (
                            <div className="mt-3 pt-3 border-t border-[#EAEFF3]">
                              <Link
                                href="/for-dentists#partner-form"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071B2C] text-white font-bold text-xs hover:bg-[#00A6CE] transition-colors"
                              >
                                <Stethoscope className="w-3.5 h-3.5 text-[#12C8E8]" />
                                <span>Open Partner Application</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#071B2C] to-[#00A6CE] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-1 shadow-xs">
                    C
                  </div>
                  <div className="bg-white border border-[#E2EBF0] rounded-2xl rounded-tl-[4px] p-3 shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce [animation-delay:0.18s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce [animation-delay:0.36s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3.5 bg-white border-t border-[#EAEFF3] shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="space-y-1.5"
              >
                <div className="flex items-center bg-[#F4F8FA] rounded-2xl p-1.5 pr-2 border border-[#E2EBF0] focus-within:border-[#00A6CE] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(0,166,206,0.12)] transition-all">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Clari about aligners, scans, or workflows..."
                    className="flex-1 py-1.5 px-3 text-xs bg-transparent focus:outline-none text-[#071B2C] placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#00A6CE] to-[#12C8E8] hover:brightness-105 active:scale-95 disabled:opacity-30 disabled:scale-100 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs"
                    aria-label="Send query"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 text-center tracking-tight">
                  CLEARNYX operates strictly through certified dental clinicians.
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
