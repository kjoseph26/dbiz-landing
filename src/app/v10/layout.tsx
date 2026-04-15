import './theme.css'

export default function V10Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='v10-scope'>
      <div className='v10-rails' aria-hidden='true'>
        <div className='v10-rails-inner' />
      </div>
      {children}
    </div>
  )
}
