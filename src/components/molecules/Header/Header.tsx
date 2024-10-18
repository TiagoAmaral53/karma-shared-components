export interface HeaderProps {
  url?: string;
  onTitleClick?: () => void;
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="bg-neutral-800 text-primary-foreground">
      <div className="container px-4">
        <div className="flex h-12 w-full items-center justify-between">
          <div className="flex items-center">
            <a
              href={props.url}
              onClick={props.onTitleClick}
              className="cursor-pointer text-base uppercase font-bold"
            >
              {props.title}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
