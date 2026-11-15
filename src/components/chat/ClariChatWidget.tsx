"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ChevronDown,
  RotateCcw,
  Stethoscope,
  Calendar,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useBookModal } from "@/components/clearnyx/BookModalContext";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
  modelBadge?: string;
  action?: string;
}

const QUICK_PROMPTS = [
  "How can my clinic partner with CLEARNYX?",
  "What is the difference between Standard & Multi-Layer?",
  "Which intraoral scanners are supported?",
  "What is the 3D staging turnaround SLA?",
  "What is the recommended daily wear schedule?",
];

export function ClariChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeModel, setActiveModel] = useState("Gemma 4 31B");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Hello! I'm **Clari**, your CLEARNYX AI Clinical Assistant. Whether you are a practicing dentist exploring our B2B lab or a patient looking to straighten your smile, I'm here to help!",
      timestamp: "Just now",
      modelBadge: "Gemma 4 31B",
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

      if (data?.activeModelGroup) {
        setActiveModel(data.activeModelGroup);
      }

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data?.reply || "I apologize, I didn't receive a complete response. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        modelBadge: data?.activeModelGroup || activeModel,
        action: data?.action,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMessage: Message = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content:
          "I am having a brief connection issue. You can explore our [Doctor Portal](/for-dentists) or contact our clinical desk directly at partners@clearnyx.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        modelBadge: activeModel,
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
          "Conversation cleared! I'm **Clari**. How can I assist your practice or smile journey today?",
        timestamp: "Just now",
        modelBadge: activeModel,
      },
    ]);
  };

  // Helper to parse simple markdown bold, lists, and links
  const renderFormattedText = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      // Bold rendering
      let parsed = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      // Markdown link rendering
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
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative"
            >
              {/* Proactive Greeting Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={() => setIsOpen(true)}
                className="hidden sm:flex absolute -top-12 right-0 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-lg border border-[#E2EBF0] text-xs font-semibold text-[#071B2C] whitespace-nowrap cursor-pointer hover:border-[#00A6CE] transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#00A6CE] animate-pulse" />
                <span>Ask Clari &bull; AI Assistant</span>
              </motion.div>

              {/* Main Circular Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00A6CE] to-[#12C8E8] text-white flex items-center justify-center shadow-xl shadow-[#00A6CE]/35 hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer"
                aria-label="Open Clari AI Chatbot"
              >
                <div className="relative">
                  <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <Sparkles className="w-3.5 h-3.5 text-white absolute -top-1 -right-1 animate-spin-slow" />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slide-in Chatbot Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[420px] h-[580px] max-h-[85vh] z-50 rounded-3xl bg-white shadow-2xl border border-[#E2EBF0] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#071B2C] via-[#0A243A] to-[#071B2C] text-white p-4 flex items-center justify-between border-b border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00A6CE] to-[#12C8E8] text-white flex items-center justify-center font-bold shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm text-white">Clari</h3>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-[#12C8E8] border border-cyan-400/30">
                      {activeModel}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    CLEARNYX AI Orthodontic Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Clear Conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Close Clari"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Prompts Carousel */}
            <div className="bg-[#F8FBFD] border-b border-[#E2EBF0] p-2.5 overflow-x-auto flex items-center gap-2 scrollbar-none">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A6CE] shrink-0 pl-1">
                Ask:
              </span>
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="shrink-0 text-[11px] font-medium text-[#071B2C] bg-white border border-[#E2EBF0] hover:border-[#00A6CE] hover:text-[#00A6CE] px-2.5 py-1 rounded-full transition-all whitespace-nowrap shadow-xs"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-white to-[#F8FBFD]">
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
                      <div className="w-7 h-7 rounded-xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 mt-0.5 border border-[#B6F0F9]">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs shadow-xs ${
                        isAssistant
                          ? "bg-white border border-[#E2EBF0] text-[#071B2C]"
                          : "bg-[#071B2C] text-white font-medium"
                      }`}
                    >
                      {/* Message Content */}
                      <div>{renderFormattedText(msg.content)}</div>

                      {/* Assistant Contextual Action Buttons */}
                      {isAssistant && msg.action === "consultation" && (
                        <div className="mt-3 pt-2.5 border-t border-[#E2EBF0]">
                          <button
                            type="button"
                            onClick={() => {
                              openModal("consultation");
                              setIsOpen(false);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00A6CE] text-white font-bold text-[11px] hover:bg-[#0087AB] transition-colors shadow-xs"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Open Consultation Booking</span>
                          </button>
                        </div>
                      )}

                      {isAssistant && msg.action === "partner" && (
                        <div className="mt-3 pt-2.5 border-t border-[#E2EBF0] flex items-center gap-2">
                          <Link
                            href="/for-dentists#partner-form"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071B2C] text-white font-bold text-[11px] hover:bg-[#00A6CE] transition-colors"
                          >
                            <Stethoscope className="w-3.5 h-3.5 text-[#12C8E8]" />
                            <span>Partner Onboarding Form</span>
                          </Link>
                        </div>
                      )}

                      {/* Timestamp & Model Tag */}
                      <div className="mt-1 flex items-center justify-between gap-2 text-[10px] text-slate-400">
                        <span>{msg.timestamp}</span>
                        {isAssistant && msg.modelBadge && (
                          <span className="font-mono text-[9px] text-[#00A6CE]">
                            via {msg.modelBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    {!isAssistant && (
                      <div className="w-7 h-7 rounded-xl bg-[#071B2C] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Loader */}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                  <div className="w-6 h-6 rounded-lg bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1 bg-white border border-[#E2EBF0] rounded-xl px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-[#E2EBF0] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Clari a clinical or treatment question..."
                className="flex-1 py-2.5 px-3.5 text-xs rounded-xl bg-[#F8FBFD] border border-[#E2EBF0] focus:border-[#00A6CE] focus:outline-none text-[#071B2C] placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-[#00A6CE] disabled:opacity-40 text-white flex items-center justify-center hover:bg-[#0087AB] active:scale-95 transition-all shrink-0 cursor-pointer"
                aria-label="Send message to Clari"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
