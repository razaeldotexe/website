import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PropTypes from "prop-types";

export const MarkdownSyntaxGuide = ({ open, onOpenChange }) => {
  const syntaxExamples = [
    {
      name: "Bold",
      syntax: "**text** or __text__",
      example: "**bold text**",
    },
    {
      name: "Italic",
      syntax: "*text* or _text_",
      example: "*italic text*",
    },
    {
      name: "Inline Code",
      syntax: "`code`",
      example: "`const x = 1;`",
    },
    {
      name: "Code Block",
      syntax: "```language\ncode\n```",
      example: "```js\nconsole.log('Hello');\n```",
    },
    {
      name: "Link",
      syntax: "[text](url)",
      example: "[Google](https://google.com)",
    },
    {
      name: "Heading 1",
      syntax: "# Heading",
      example: "# Main Title",
    },
    {
      name: "Heading 2",
      syntax: "## Heading",
      example: "## Subtitle",
    },
    {
      name: "Heading 3",
      syntax: "### Heading",
      example: "### Section",
    },
    {
      name: "Bullet List",
      syntax: "- item",
      example: "- First item\n- Second item",
    },
    {
      name: "Numbered List",
      syntax: "1. item",
      example: "1. First\n2. Second",
    },
    {
      name: "Quote",
      syntax: "> quote",
      example: "> This is a quote",
    },
    {
      name: "Strikethrough",
      syntax: "~~text~~",
      example: "~~deleted text~~",
    },
    {
      name: "Horizontal Rule",
      syntax: "---",
      example: "---",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Markdown Formatting Guide</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <p className="text-sm text-muted-foreground">
            Gunakan syntax markdown berikut untuk memformat teks Anda:
          </p>
          <div className="space-y-3">
            {syntaxExamples.map((item) => (
              <div
                key={item.name}
                className="p-3 border rounded-md bg-muted/30 space-y-2"
              >
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Syntax:</div>
                  <code className="block p-2 bg-background rounded text-xs font-mono">
                    {item.syntax}
                  </code>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Contoh:</div>
                  <code className="block p-2 bg-background rounded text-xs font-mono">
                    {item.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              💡 <strong>Tips:</strong> Pilih teks lalu klik tombol toolbar
              untuk langsung wrap dengan format markdown.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

MarkdownSyntaxGuide.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
};
