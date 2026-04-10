import './theme.css'

export default function V4Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='v4-scope'>{children}</div>
}
