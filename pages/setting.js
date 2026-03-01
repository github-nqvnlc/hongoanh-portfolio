import { useEffect, useState } from "react";

const THEME_FIELDS = [
  { key: "--color-primary", label: "Primary" },
  { key: "--color-primary-light", label: "Primary Light" },
  { key: "--color-text-main", label: "Text Main" },
  { key: "--color-text-dark", label: "Text Dark" },
  { key: "--color-text-white", label: "Text White" },
  { key: "--color-bg", label: "Background" },
  { key: "--color-surface", label: "Surface" },
  { key: "--color-border", label: "Border" },
  { key: "--color-link", label: "Link" },
  { key: "--color-link-hover", label: "Link Hover" },
  { key: "--color-muted", label: "Muted" },
  { key: "--color-section-bg", label: "Section Background" },
  { key: "--color-shadow", label: "Shadow" },
  { key: "--color-danger", label: "Danger" },
];

const fallbackTheme = {
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
};

const PRESET_THEMES = {
  "Hồng nhạt": {
    "--color-primary": "#f5bfd0",
    "--color-primary-light": "#f9d9e4",
    "--color-text-main": "#945d71",
    "--color-text-dark": "#000000",
    "--color-text-white": "#ffffff",
    "--color-bg": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-border": "#945d71",
    "--color-link": "#945d71",
    "--color-link-hover": "#7d4960",
    "--color-muted": "#945d71",
    "--color-section-bg": "#fff1f6",
    "--color-shadow": "#945d71",
    "--color-danger": "#ff0000",
  },
  "Hồng pastel": {
    "--color-primary": "#f8c8dc",
    "--color-primary-light": "#fbe3ee",
    "--color-text-main": "#8e5f72",
    "--color-text-dark": "#000000",
    "--color-text-white": "#ffffff",
    "--color-bg": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-border": "#8e5f72",
    "--color-link": "#8e5f72",
    "--color-link-hover": "#744b5c",
    "--color-muted": "#8e5f72",
    "--color-section-bg": "#fff4f9",
    "--color-shadow": "#8e5f72",
    "--color-danger": "#ff0000",
  },
  "Xanh dương pastel": {
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
  "Xanh lá pastel": {
    "--color-primary": "#bfe3c0",
    "--color-primary-light": "#dff3df",
    "--color-text-main": "#4e7b56",
    "--color-text-dark": "#000000",
    "--color-text-white": "#ffffff",
    "--color-bg": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-border": "#4e7b56",
    "--color-link": "#4e7b56",
    "--color-link-hover": "#3c6444",
    "--color-muted": "#4e7b56",
    "--color-section-bg": "#f2fbf2",
    "--color-shadow": "#4e7b56",
    "--color-danger": "#ff0000",
  },
  "Tím pastel": {
    "--color-primary": "#d7c4ee",
    "--color-primary-light": "#ede3f9",
    "--color-text-main": "#6a5b93",
    "--color-text-dark": "#000000",
    "--color-text-white": "#ffffff",
    "--color-bg": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-border": "#6a5b93",
    "--color-link": "#6a5b93",
    "--color-link-hover": "#544678",
    "--color-muted": "#6a5b93",
    "--color-section-bg": "#f7f2fd",
    "--color-shadow": "#6a5b93",
    "--color-danger": "#ff0000",
  },
  "Cam pastel": {
    "--color-primary": "#ffd3b6",
    "--color-primary-light": "#ffe8da",
    "--color-text-main": "#9b6747",
    "--color-text-dark": "#000000",
    "--color-text-white": "#ffffff",
    "--color-bg": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-border": "#9b6747",
    "--color-link": "#9b6747",
    "--color-link-hover": "#7e5136",
    "--color-muted": "#9b6747",
    "--color-section-bg": "#fff7f2",
    "--color-shadow": "#9b6747",
    "--color-danger": "#ff0000",
  },
  "Vàng pastel": {
    "--color-primary": "#fce8a8",
    "--color-primary-light": "#fdf3cc",
    "--color-text-main": "#8d7a38",
    "--color-text-dark": "#000000",
    "--color-text-white": "#ffffff",
    "--color-bg": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-border": "#8d7a38",
    "--color-link": "#8d7a38",
    "--color-link-hover": "#72612a",
    "--color-muted": "#8d7a38",
    "--color-section-bg": "#fffdf2",
    "--color-shadow": "#8d7a38",
    "--color-danger": "#ff0000",
  },
  "Đỏ pastel": {
    "--color-primary": "#f4b3b3",
    "--color-primary-light": "#f9d7d7",
    "--color-text-main": "#8f4f4f",
    "--color-text-dark": "#000000",
    "--color-text-white": "#ffffff",
    "--color-bg": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-border": "#8f4f4f",
    "--color-link": "#8f4f4f",
    "--color-link-hover": "#743b3b",
    "--color-muted": "#8f4f4f",
    "--color-section-bg": "#fff3f3",
    "--color-shadow": "#8f4f4f",
    "--color-danger": "#ff0000",
  },

  "Dark hồng pastel": {
    "--color-primary": "#d881a8",
    "--color-primary-light": "#aa5e82",
    "--color-text-main": "#f7dce8",
    "--color-text-dark": "#f7dce8",
    "--color-text-white": "#ffffff",
    "--color-bg": "#1b1318",
    "--color-surface": "#241922",
    "--color-border": "#aa5e82",
    "--color-link": "#f0bcd2",
    "--color-link-hover": "#ffd9ea",
    "--color-muted": "#d6a7bc",
    "--color-section-bg": "#21161f",
    "--color-shadow": "#7c4560",
    "--color-danger": "#ff6b6b",
  },
  "Dark xanh dương pastel": {
    "--color-primary": "#7ea1c4",
    "--color-primary-light": "#5c7f9f",
    "--color-text-main": "#d9e8f7",
    "--color-text-dark": "#d9e8f7",
    "--color-text-white": "#ffffff",
    "--color-bg": "#111722",
    "--color-surface": "#182132",
    "--color-border": "#5c7f9f",
    "--color-link": "#b7d1eb",
    "--color-link-hover": "#d7e9fb",
    "--color-muted": "#9eb7cf",
    "--color-section-bg": "#141d2c",
    "--color-shadow": "#46637f",
    "--color-danger": "#ff6b6b",
  },
  "Dark xanh lá pastel": {
    "--color-primary": "#7fb38b",
    "--color-primary-light": "#5f8c6b",
    "--color-text-main": "#dff3e4",
    "--color-text-dark": "#dff3e4",
    "--color-text-white": "#ffffff",
    "--color-bg": "#121b15",
    "--color-surface": "#19241d",
    "--color-border": "#5f8c6b",
    "--color-link": "#b8dfc2",
    "--color-link-hover": "#d6f0dc",
    "--color-muted": "#9fc6a9",
    "--color-section-bg": "#152019",
    "--color-shadow": "#476b52",
    "--color-danger": "#ff6b6b",
  },
  "Dark tím pastel": {
    "--color-primary": "#a995d6",
    "--color-primary-light": "#7f6ab0",
    "--color-text-main": "#ebe3ff",
    "--color-text-dark": "#ebe3ff",
    "--color-text-white": "#ffffff",
    "--color-bg": "#171322",
    "--color-surface": "#201a2f",
    "--color-border": "#7f6ab0",
    "--color-link": "#d4c7ff",
    "--color-link-hover": "#ece5ff",
    "--color-muted": "#b5a4de",
    "--color-section-bg": "#1b1630",
    "--color-shadow": "#5f4f87",
    "--color-danger": "#ff6b6b",
  },
  "Dark cam pastel": {
    "--color-primary": "#d39b77",
    "--color-primary-light": "#a37253",
    "--color-text-main": "#ffe9dc",
    "--color-text-dark": "#ffe9dc",
    "--color-text-white": "#ffffff",
    "--color-bg": "#1e1713",
    "--color-surface": "#291f19",
    "--color-border": "#a37253",
    "--color-link": "#ffcfb3",
    "--color-link-hover": "#ffe5d4",
    "--color-muted": "#d4ad95",
    "--color-section-bg": "#231a15",
    "--color-shadow": "#7e5840",
    "--color-danger": "#ff6b6b",
  },
  "Dark vàng pastel": {
    "--color-primary": "#c8b06b",
    "--color-primary-light": "#99854c",
    "--color-text-main": "#fff5cf",
    "--color-text-dark": "#fff5cf",
    "--color-text-white": "#ffffff",
    "--color-bg": "#1f1a12",
    "--color-surface": "#2a2318",
    "--color-border": "#99854c",
    "--color-link": "#f0df9d",
    "--color-link-hover": "#fff0bf",
    "--color-muted": "#cbb97d",
    "--color-section-bg": "#241e14",
    "--color-shadow": "#77683a",
    "--color-danger": "#ff6b6b",
  },
  "Dark đỏ pastel": {
    "--color-primary": "#c58a8a",
    "--color-primary-light": "#9a6363",
    "--color-text-main": "#ffe3e3",
    "--color-text-dark": "#ffe3e3",
    "--color-text-white": "#ffffff",
    "--color-bg": "#1f1414",
    "--color-surface": "#2a1b1b",
    "--color-border": "#9a6363",
    "--color-link": "#efbcbc",
    "--color-link-hover": "#ffdcdc",
    "--color-muted": "#cc9a9a",
    "--color-section-bg": "#241717",
    "--color-shadow": "#764c4c",
    "--color-danger": "#ff6b6b",
  },
};

export default function SettingPage() {
  const [theme, setTheme] = useState(fallbackTheme);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedPreset, setSelectedPreset] = useState("");

  const applyTheme = (nextTheme) => {
    Object.entries(nextTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  const loadTheme = async () => {
    try {
      const response = await fetch("/api/theme");
      const data = await response.json();
      const loadedTheme = data?.theme || fallbackTheme;
      setTheme(loadedTheme);
      applyTheme(loadedTheme);
    } catch (error) {
      setMessage("Không thể tải theme, đang dùng mặc định.");
      setTheme(fallbackTheme);
      applyTheme(fallbackTheme);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const onChange = (key, value) => {
    const nextTheme = { ...theme, [key]: value };
    setSelectedPreset("");
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const onSelectPreset = (presetName) => {
    const nextTheme = PRESET_THEMES[presetName];
    if (!nextTheme) return;

    setSelectedPreset(presetName);
    setTheme(nextTheme);
    applyTheme(nextTheme);
    setMessage(`Đã áp dụng preset: ${presetName}. Nhấn Lưu theme để lưu lại.`);
  };

  const onSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const response = await fetch("/api/theme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme }),
      });

      if (!response.ok) {
        throw new Error("Save failed");
      }

      setMessage("Lưu theme thành công.");
    } catch (error) {
      setMessage("Lưu theme thất bại.");
    } finally {
      setSaving(false);
    }
  };

  const onReset = () => {
    setSelectedPreset("");
    setTheme(fallbackTheme);
    applyTheme(fallbackTheme);
    setMessage("Đã reset về màu mặc định. Nhấn Save để lưu.");
  };

  return (
    <main className="section" style={{ minHeight: "100vh", paddingTop: 120 }}>
      <div className="container">
        <div className="section-heading">
          <h3>
            <span>Theme Setting</span>
          </h3>
          <p>Chỉnh màu các biến trong root và lưu vào JSON server.</p>
        </div>

        {loading ? (
          <p>Đang tải theme...</p>
        ) : (
          <div className="contact-form">
            <h6 className="mb-3" style={{ fontSize: 24 }}>Bộ màu có sẵn</h6>
            <div className="row gy-2 mb-4">
              {Object.entries(PRESET_THEMES).map(([presetName, presetValue]) => (
                <div className="col-sm-6 col-lg-3" key={presetName}>
                  <button
                    type="button"
                    className="w-100"
                    onClick={() => onSelectPreset(presetName)}
                    style={{
                      border: `2px solid ${selectedPreset === presetName ? "var(--color-text-main)" : "#d9d9d9"}`,
                      borderRadius: 10,
                      padding: "10px 12px",
                      background: "#fff",
                      textAlign: "left",
                    }}
                  >
                    <div className="fw-bold" style={{ color: "#333", marginBottom: 6 }}>
                      {presetName}
                    </div>
                    <div className="d-flex gap-1">
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          display: "inline-block",
                          background: presetValue["--color-primary"],
                        }}
                      />
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          display: "inline-block",
                          background: presetValue["--color-primary-light"],
                        }}
                      />
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          display: "inline-block",
                          background: presetValue["--color-text-main"],
                        }}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>

            <div className="row gy-3">
              {THEME_FIELDS.map((field) => (
                <div className="col-md-6" key={field.key}>
                  <label className="form-label fw-bold">{field.label}</label>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="color"
                      value={theme[field.key] || "#000000"}
                      onChange={(e) => onChange(field.key, e.target.value)}
                      style={{ width: 56, height: 40 }}
                    />
                    <input
                      className="form-control"
                      type="text"
                      value={theme[field.key] || ""}
                      onChange={(e) => onChange(field.key, e.target.value)}
                    />
                  </div>
                  <small className="text-muted">{field.key}</small>
                </div>
              ))}
            </div>

            <div className="d-flex gap-2 mt-4">
              <button className="px-btn px-btn-theme" onClick={onSave} disabled={saving}>
                {saving ? "Đang lưu..." : "Lưu theme"}
              </button>
              <button className="px-btn px-btn-theme2" onClick={onReset} type="button">
                Reset mặc định
              </button>
            </div>

            {message && <p className="mt-3 mb-0">{message}</p>}
          </div>
        )}
      </div>
    </main>
  );
}
