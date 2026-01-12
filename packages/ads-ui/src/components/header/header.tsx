import { AlertIcon, BackIcon, ExLogoIcon, MyPageIcon } from '../../icons';

interface HeaderProps {
  variant: 'host' | 'audience';
  kind: 'main' | 'sub';
  title?: string;
}

const Header = ({
  variant,
  kind,
  title,
}: HeaderProps) => {
  const isMain = kind === 'main';
  const isSub = kind === 'sub';
  const showAlert = isMain && variant === 'audience';
  const showMyPage = isMain;

  return (
    <header>
      {isMain && (
        <div>
          <ExLogoIcon />
          <div>
            {showAlert && (
              <button type="button">
                <AlertIcon />
              </button>
            )}
            {showMyPage && (
              <button type="button">
                <MyPageIcon />
              </button>
            )}
          </div>
        </div>
      )}
      {isSub && (
        <div>
          <button type="button">
            <BackIcon />
          </button>
          {title && <h1>{title}</h1>}
        </div>
      )}
    </header>
  );
};

export default Header;
