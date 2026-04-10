import './theme.css'

export default function V6Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='v6-scope'>{children}</div>
}
