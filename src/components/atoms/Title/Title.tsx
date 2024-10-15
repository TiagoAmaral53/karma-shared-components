export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
  children?: React.ReactNode;
  type?: 'secundary' | 'default';
}

const Title = ({
  level = 3,
  type = 'default',
  children,
  ...rest
}: TitleProps) => {
  const scroll = 'scroll-m-20';
  const extrabold = 'font-semibold';
  const trackingTight = 'tracking-tight';
  let classType = '';
  if (type == 'secundary') {
    classType = ' text-black text-opacity-50';
  }
  const restClasses = classType + (rest.className ? ' ' + rest.className : '');

  if (level === 1) {
    return (
      <h1
        {...rest}
        className={`${scroll} text-4xl font-extrabold ${trackingTight} lg:text-5xl${restClasses}`}
      >
        {children}
      </h1>
    );
  } else if (level === 2) {
    return (
      <h2
        {...rest}
        className={`${scroll} border-b pb-2 text-3xl ${extrabold} ${trackingTight} first:mt-0${restClasses}`}
      >
        {children}
      </h2>
    );
  } else if (level === 4) {
    return (
      <h4
        {...rest}
        className={`${scroll} text-xl ${extrabold} ${trackingTight}${restClasses}`}
      >
        {children}
      </h4>
    );
  } else if (level === 5) {
    return (
      <h5
        {...rest}
        className={`${scroll} text-base ${extrabold} ${trackingTight}${restClasses}`}
      >
        {children}
      </h5>
    );
  } else {
    return (
      <h3
        {...rest}
        className={`${scroll} text-2xl ${extrabold} ${trackingTight}${restClasses}`}
      >
        {children}
      </h3>
    );
  }
};

export default Title;
