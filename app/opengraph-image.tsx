import { ImageResponse } from "next/og"

export const alt = "Paypoint Solutions — Zero-Fee Payment Processing & POS Systems for Texas Businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #050505 0%, #0f172a 60%, #052e16 100%)",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
              color: "#050505",
            }}
          >
            P
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -1 }}>Paypoint Solutions</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -3,
            }}
          >
            Accept Credit Cards Without Fees
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#a7f3d0" }}>
            Free POS Equipment · $0 Processing Fees · Local Texas Support
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>
            Seguin · New Braunfels · San Antonio · Austin
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              padding: "12px 28px",
              borderRadius: 999,
              border: "2px solid #10b981",
              color: "#10b981",
            }}
          >
            paypointsolutions-tex.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
