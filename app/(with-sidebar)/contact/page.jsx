"use client";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/context/StoreProvider";
import { Mails, Phone, Send } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactPage() {
  const { store } = useStore();

  return (
    <>
      <title>Contact | MELEE</title>
      <Container>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Details */}
            <div>
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-300 mb-6">
                {`We'd love to hear from you! Reach out to us using the
                information below:`}
              </p>

              {store?.contact_email && (
                <Link
                  href={`mailto:${store?.contact_email}`}
                  className="flex items-center mb-4 gap-2"
                >
                  <Mails className="w-5 h-5" />
                  <p>Email: {store?.contact_email}</p>
                </Link>
              )}
              {store?.contact_number && (
                <Link
                  href={`tel:+${store?.contact_number}`}
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <p>Phone: {store?.contact_number}</p>
                </Link>
              )}
            </div>
            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="mt-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message"
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={() => toast.success("Message Sent!")}
                  className="gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
