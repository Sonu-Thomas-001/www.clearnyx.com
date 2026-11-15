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
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useBookModal } from "@/components/clearnyx/BookModalContext";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
  action?: string;
}

const CONCIERGE_SUGGESTIONS = [
  "How can my clinic partner with CLEARNYX?",
  "Standard PETG vs Multi-Layer Pro difference",
  "Which intraoral scanners are supported?",
  "What is the recommended daily wear schedule?",
  "How does 3D CAD staging turnaround work?",
];

export function ClariChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Welcome to CLEARNYX. I am **Clari**, your clinical concierge. Whether you are a practicing dentist inquiring about our B2B manufacturing lab or exploring clear aligner treatment, how may I assist you today?",
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
          "I apologize, I didn't receive a complete response. Please try again or connect with our team at info@clearnyx.com.",
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
          "Conversation cleared. I am **Clari**. How can I help you regarding CLEARNYX orthodontic systems?",
        timestamp: "Just now",
      },
    ]);
  };

  // Helper to parse simple markdown formatting
  const renderFormattedText = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      let parsed = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      parsed = parsed.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" class="text-[#00A6CE] font-bold underline hover:text-[#0087AB]">$1</a>'
      );

      if (line.startsWith("### ")) {
        return (
          <h4
            key={idx}
            className="text-xs font-bold uppercase tracking-wider text-[#071B2C] mt-2 mb-1"
            dangerouslySetInnerHTML={{ __html: parsed.replace("### ", "") }}
          />
        );
      }

      if (line.startsWith("- ")) {
        return (
          <li
            key={idx}
            className="ml-3 list-disc text-xs text-[#556977] my-0.5"
            dangerouslySetInnerHTML={{ __html: parsed.replace("- ", "") }}
          />
        );
      }

      return (
        <p
          key={idx}
          className="text-xs leading-relaxed text-[#071B2C] my-1"
          dangerouslySetInnerHTML={{ __html: parsed }}
        />
      );
    });
  };

  return (
    <>
      {/* Concierge Trigger - Positioned on the LEFT SIDE */}
      <div className="fixed bottom-20 sm:bottom-6 left-5 sm:left-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white hover:bg-[#F8FBFD] text-[#071B2C] shadow-lg border border-[#D0DFE8] hover:border-[#00A6CE]/60 transition-all duration-200 group cursor-pointer"
                aria-label="Open Clari Clinical Concierge"
              >
                {/* Monogram Badge */}
                <span className="w-7 h-7 rounded-full bg-[#071B2C] text-[#12C8E8] flex items-center justify-center font-bold text-xs tracking-tight shadow-xs">
                  C
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors leading-tight">
                    Clari
                  </span>
                  <span className="text-[10px] text-[#556977] leading-none">
                    Clinical Concierge
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 ml-0.5 animate-pulse" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Concierge Window - Positioned on the LEFT SIDE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[390px] h-[550px] max-h-[82vh] z-50 rounded-2xl bg-white shadow-2xl border border-[#D0DFE8] flex flex-col overflow-hidden"
          >
            {/* Header: Pure Clinical Simplicity */}
            <div className="bg-[#071B2C] text-white px-5 py-4 flex items-center justify-between border-b border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 text-[#12C8E8] border border-white/15 flex items-center justify-center font-bold text-sm">
                  C
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white leading-tight">
                    Clari
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p className="text-[11px] text-slate-300">
                      CLEARNYX Clinical Concierge
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Reset Conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Close Concierge"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Suggestion Strip */}
            <div className="bg-[#F8FBFD] border-b border-[#E2EBF0] p-2.5 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
              {CONCIERGE_SUGGESTIONS.map((suggestion, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(suggestion)}
                  className="shrink-0 text-[11px] font-medium text-[#071B2C] bg-white border border-[#E2EBF0] hover:border-[#00A6CE] hover:text-[#00A6CE] px-3 py-1 rounded-full transition-all whitespace-nowrap shadow-xs"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Conversation Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gradient-to-b from-white to-[#F8FBFD]">
              {messages.map((msg) => {
                const isAssistant = msg.role === "assistant";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      isAssistant ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAssistant && (
                      <div className="w-6 h-6 rounded-full bg-[#E7F6FA] text-[#00A6CE] border border-[#B6F0F9] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        C
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs ${
                        isAssistant
                          ? "bg-[#F4F8FA] border border-[#E2EBF0] text-[#071B2C]"
                          : "bg-[#071B2C] text-white font-medium"
                      }`}
                    >
                      <div>{renderFormattedText(msg.content)}</div>

                      {/* Contextual Clinical Buttons */}
                      {isAssistant && msg.action === "consultation" && (
                        <div className="mt-3 pt-2.5 border-t border-[#E2EBF0]">
                          <button
                            type="button"
                            onClick={() => {
                              openModal("consultation");
                              setIsOpen(false);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00A6CE] text-white font-bold text-[11px] hover:bg-[#0087AB] transition-colors shadow-xs cursor-pointer"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Schedule Consultation</span>
                          </button>
                        </div>
                      )}

                      {isAssistant && msg.action === "partner" && (
                        <div className="mt-3 pt-2.5 border-t border-[#E2EBF0]">
                          <Link
                            href="/for-dentists#partner-form"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071B2C] text-white font-bold text-[11px] hover:bg-[#00A6CE] transition-colors"
                          >
                            <Stethoscope className="w-3.5 h-3.5 text-[#12C8E8]" />
                            <span>Doctor Onboarding Form</span>
                          </Link>
                        </div>
                      )}

                      <div className="mt-1.5 text-[10px] text-slate-400 text-right">
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-slate-400 p-1">
                  <div className="w-6 h-6 rounded-full bg-[#E7F6FA] text-[#00A6CE] border border-[#B6F0F9] flex items-center justify-center font-bold text-[10px]">
                    C
                  </div>
                  <div className="flex items-center gap-1 bg-[#F4F8FA] border border-[#E2EBF0] rounded-xl px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-[#E2EBF0] space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about CLEARNYX..."
                  className="flex-1 py-2 px-3 text-xs rounded-xl bg-[#F8FBFD] border border-[#E2EBF0] focus:border-[#00A6CE] focus:bg-white focus:outline-none text-[#071B2C] placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-xl bg-[#071B2C] hover:bg-[#00A6CE] disabled:opacity-30 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center">
                For clinical diagnosis, please consult a licensed dental professional.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
