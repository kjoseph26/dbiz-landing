import './theme.css'

export default function V3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='v3-scope'>{children}</div>
}
