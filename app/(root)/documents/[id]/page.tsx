import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, UserButton } from '@clerk/clerk-react'
import { SignedOut, SignInButton } from '@clerk/nextjs'
const Document= () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center gap-2'>
          <p className='document-title'>This is a fake document</p>
        </div>
        <SignedOut >
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  )
}

export default Document