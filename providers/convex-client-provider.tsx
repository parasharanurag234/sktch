"use client";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
} from "convex/react";

import { Loading } from "@/components/auth/loading";
import HomePage from "@/components/homePage/HomePage";

import CursorTrail from "@/components/homePage/Cursor"

interface ConvexClientProviderProps {
  children: React.ReactNode;
};

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        
        <SignedOut>
          <CursorTrail/>
        </SignedOut>
        <SignedIn>
          {children}
          <UserButton />
        </SignedIn>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
