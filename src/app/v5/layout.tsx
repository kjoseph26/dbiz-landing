import './theme.css'

export default function V5Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='v5-scope' data-theme='dark'>
      {children}
    </div>
  )
}
