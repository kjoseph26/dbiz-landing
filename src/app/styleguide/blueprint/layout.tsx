import './theme.css'

export default function BlueprintStyleguideLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='bp-scope' data-theme='dark'>
      {children}
    </div>
  )
}
