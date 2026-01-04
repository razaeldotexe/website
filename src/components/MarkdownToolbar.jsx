import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Code,
  Strikethrough,
  Link,
  Heading,
  List,
  Quote,
  HelpCircle,
} from "lucide-react";
import PropTypes from "prop-types";
import { MarkdownSyntaxGuide } from "./MarkdownSyntaxGuide";
import { useState } from "react";

export const MarkdownToolbar = ({ textareaRef }) => {
  const [showGuide, setShowGuide] = useState(false);

  const insertMarkdown = (before, after = "", placeholder = "text") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);

    const insertion =
      selectedText.length > 0
        ? `${before}${selectedText}${after}`
        : `${before}${placeholder}${after}`;

    const newText = text.substring(0, start) + insertion + text.substring(end);

    // Update textarea value
    textarea.value = newText;

    // Trigger change event
    const event = new Event("input", { bubbles: true });
    textarea.dispatchEvent(event);

    // Set cursor position
    const cursorPos =
      selectedText.length > 0
        ? start + before.length + selectedText.length + after.length
        : start + before.length + placeholder.length;

    textarea.focus();
    textarea.setSelectionRange(cursorPos, cursorPos);
  };

  const toolbarButtons = [
    {
      icon: Bold,
      label: "Bold",
      onClick: () => insertMarkdown("**", "**"),
    },
    {
      icon: Italic,
      label: "Italic",
      onClick: () => insertMarkdown("*", "*"),
    },
    {
      icon: Code,
      label: "Code",
      onClick: () => insertMarkdown("`", "`"),
    },
    {
      icon: Strikethrough,
      label: "Strikethrough",
      onClick: () => insertMarkdown("~~", "~~"),
    },
    {
      icon: Link,
      label: "Link",
      onClick: () => insertMarkdown("[", "](url)", "text"),
    },
    {
      icon: Heading,
      label: "Heading",
      onClick: () => insertMarkdown("## ", "", "Heading"),
    },
    {
      icon: List,
      label: "List",
      onClick: () => insertMarkdown("- ", "", "List item"),
    },
    {
      icon: Quote,
      label: "Quote",
      onClick: () => insertMarkdown("> ", "", "Quote"),
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-1 p-2 border rounded-md bg-muted/50">
        {toolbarButtons.map((button) => (
          <Button
            key={button.label}
            type="button"
            variant="ghost"
            size="sm"
            onClick={button.onClick}
            title={button.label}
            className="h-8 w-8 p-0"
          >
            <button.icon className="h-4 w-4" />
            <span className="sr-only">{button.label}</span>
          </Button>
        ))}
        <div className="flex-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowGuide(true)}
          title="Formatting Help"
          className="h-8 px-2"
        >
          <HelpCircle className="h-4 w-4 mr-1" />
          <span className="text-xs">Help</span>
        </Button>
      </div>

      <MarkdownSyntaxGuide open={showGuide} onOpenChange={setShowGuide} />
    </>
  );
};

MarkdownToolbar.propTypes = {
  textareaRef: PropTypes.object.isRequired,
};
