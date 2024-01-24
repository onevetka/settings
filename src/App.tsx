import './App.css';
import { ThemeProvider } from './components/ui/theme-provider';
import { EmailNotificationForm } from './context/settings/feature/email-notification/ui/containers/email-notification-form/EmailNotificationForm';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <EmailNotificationForm />
    </ThemeProvider>
  );
}

export default App;
