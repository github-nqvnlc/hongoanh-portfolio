import fs from "fs";
import path from "path";

const themeFilePath = path.join(process.cwd(), "data", "theme.json");

const defaultTheme = {
  theme: {
    "--color-primary": "#acc2d9",
    "--color-primary-light": "#b8daef",
    "--color-text-main": "#476e96",
    "--color-text-dark": "#000000",
    "--color-text-white": "#ffffff",
    "--color-bg": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-border": "#476e96",
    "--color-link": "#476e96",
    "--color-link-hover": "#35597e",
    "--color-muted": "#476e96",
    "--color-section-bg": "#eef6fb",
    "--color-shadow": "#476e96",
    "--color-danger": "#ff0000",
  },
};

function ensureThemeFile() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(themeFilePath)) {
    fs.writeFileSync(themeFilePath, JSON.stringify(defaultTheme, null, 2), "utf8");
  }
}

export default function handler(req, res) {
  ensureThemeFile();

  if (req.method === "GET") {
    try {
      const raw = fs.readFileSync(themeFilePath, "utf8");
      const data = JSON.parse(raw);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: "Không thể đọc theme", error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const { theme } = req.body || {};
      if (!theme || typeof theme !== "object") {
        return res.status(400).json({ message: "Dữ liệu theme không hợp lệ" });
      }

      fs.writeFileSync(themeFilePath, JSON.stringify({ theme }, null, 2), "utf8");
      return res.status(200).json({ message: "Lưu theme thành công", theme });
    } catch (error) {
      return res.status(500).json({ message: "Không thể lưu theme", error: error.message });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
