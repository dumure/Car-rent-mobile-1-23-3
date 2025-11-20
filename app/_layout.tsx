import LayoutContent from "@/components/layout/layout-content";
import ThemeProvider from "@/context/theme-provider";


export default function RootLayout() {

  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
}
