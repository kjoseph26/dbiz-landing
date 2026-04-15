import './theme.css'

export default function V9Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='v9-scope'>{children}</div>
}
