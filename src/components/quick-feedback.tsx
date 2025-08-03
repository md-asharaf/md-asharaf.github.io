"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageSquare, Send, Star } from "lucide-react";

interface QuickFeedbackProps {
  className?: string;
}

export function QuickFeedback({ className }: QuickFeedbackProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setRating(0);
          setMessage("");
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={cn("fixed bottom-6 right-6 z-50 rounded-full shadow-lg", className)}
        size="lg"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        Feedback
      </Button>
    );
  }

  return (
    <Card className={cn("fixed bottom-6 right-6 z-50 w-80 shadow-xl", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Quick Feedback</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 p-0"
          >
            ×
          </Button>
        </div>
        <CardDescription>
          How's your experience with my portfolio?
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {submitted ? (
          <div className="text-center py-4">
            <div className="text-green-600 dark:text-green-400 text-lg mb-2">✓</div>
            <p className="text-sm text-muted-foreground">
              Thanks for your feedback!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Star Rating */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={cn(
                      "w-6 h-6 transition-colors",
                      star <= rating
                        ? "text-yellow-400"
                        : "text-muted-foreground hover:text-yellow-400"
                    )}
                  >
                    <Star className="w-full h-full fill-current" />
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="quick-message" className="text-sm font-medium">
                Message (optional)
              </label>
              <textarea
                id="quick-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any specific feedback?"
                rows={3}
                className="w-full px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={rating === 0 || isSubmitting}
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
                  Send Feedback
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
