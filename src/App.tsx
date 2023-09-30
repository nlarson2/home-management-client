import "./App.css";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

console.log(process.env);
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw "Missing Publishable Key";
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark }}
      publishableKey={clerkPubKey}
    >
      <SignedIn>
        <Welcome />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

function Welcome() {
  return <div>Hello you are signed in</div>;
}

export default App;
