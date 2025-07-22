'use client'

import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ClerkProvider, SignInButton, SignUpButton, useAuth } from '@clerk/nextjs'
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from 'convex/react';
import Loading from './loading';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  return <ClerkProvider><ConvexProviderWithClerk client={convex} useAuth={useAuth}>
    <AuthLoading>
      <Loading />
    </AuthLoading>
    <Authenticated>
      {children}
    </Authenticated>
      <Unauthenticated>
        <SignInButton />
        <SignUpButton />
      </Unauthenticated>
    </ConvexProviderWithClerk></ClerkProvider>;
}