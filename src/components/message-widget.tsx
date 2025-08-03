"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageCircle, Send, X } from "lucide-react";

interface MessageWidgetProps {
  className?: string;
}

export function MessageWidget({ className }: MessageWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !contact.trim()) return;
    
    setIsSubmitting(true);

    try {
      // Here you can integrate with your preferred messaging service
      // For now, just log the message
      console.log("New message:", {
        message: message.trim(),
        contact: contact.trim(),
        timestamp: new Date().toISOString(),
      });

      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setMessage("");
        setContact("");
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full shadow-lg h-14 w-14 p-0",
          className
        )}
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className={cn("fixed bottom-6 right-6 z-50 w-80 shadow-xl", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Send Message
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {submitted ? (
          <div className="text-center py-6">
            <div className="text-green-600 dark:text-green-400 text-2xl mb-2">✓</div>
            <p className="text-sm text-muted-foreground">
              Message sent successfully!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Contact Input */}
            <div className="space-y-2">
              <label htmlFor="contact" className="text-sm font-medium">
                Email or Phone
              </label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                placeholder="your.email@example.com or +1234567890"
                className="w-full px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                placeholder="Write your message here..."
                className="w-full px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!message.trim() || !contact.trim() || isSubmitting}
              className="w-full"
              size="sm"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-3 h-3 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
