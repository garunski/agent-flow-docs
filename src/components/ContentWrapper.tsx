import clsx from 'clsx'

export function ContentWrapper({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="lg:flex lg:justify-end">
        <div
          className={clsx(
            'mx-auto max-w-lg lg:mx-0 lg:max-w-xl lg:flex-auto',
            className,
          )}
          {...props}
        />
      </div>
    </div>
  )
}
