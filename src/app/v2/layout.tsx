import './theme.css'

export default function V2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='v2-scope'>{children}</div>
}
