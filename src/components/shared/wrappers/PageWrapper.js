import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import HeaderSearchForm from '@/components/layout/header/HeaderSearchForm';
import MobileMenu from '@/components/layout/header/MobileMenu';
import CartContextProvider from '@/context_api/CartContext';
import CurrentItemContextProvider from '@/context_api/CurrentItemContext';
import WishlistContextProvider from '@/context_api/WshlistContext';
import PreLoader from '../others/PreLoader';
import RtlMaker from '../others/RtlMaker';
import SmoothScroller from '../others/SmoothScroller';
import TjMagicCursor from '../others/TjMagicCursor';
import ClientWrapper from './ClientWrapper';
import FooterStack from './FooterStack';

const PageWrapper = ({
  children,
  isIndexPage,
  isInnerPage,
  isResumeBtn,
  headerType,
  isHeaderTop,
  topbarType,
  footerType,
  cursorType,
  currentItemId,
  isEcommerce,
  isRtl,
}) => {
  return (
    <div className={`${isEcommerce ? 'ecommerce' : ''}`}>
      <RtlMaker isRtl={isRtl} />
      <PreLoader />
      <TjMagicCursor type={cursorType} />
      <HeaderSearchForm />
      <MobileMenu />
      <Header
        option={{
          isIndexPage,
          isInnerPage,
          headerType,
          isHeaderTop,
          topbarType,
          isResumeBtn,
        }}
      />
      <Header
        isStickyHeader={true}
        option={{
          isIndexPage,
          isInnerPage,
          headerType,
          isHeaderTop,
          topbarType,
          isResumeBtn,
        }}
      />
      {isEcommerce && (currentItemId || currentItemId === 0) ? (
        <CurrentItemContextProvider currentId={currentItemId}>
          <CartContextProvider>
            <WishlistContextProvider>{children ? children : ''}</WishlistContextProvider>
          </CartContextProvider>
        </CurrentItemContextProvider>
      ) : isEcommerce ? (
        <CartContextProvider>
          <WishlistContextProvider>{children ? children : ''}</WishlistContextProvider>
        </CartContextProvider>
      ) : currentItemId || currentItemId === 0 ? (
        <CurrentItemContextProvider currentId={currentItemId}>
          {children ? children : ''}
        </CurrentItemContextProvider>
      ) : (
        children
      )}

      <FooterStack>
        <Footer isRtl={isRtl} footerType={footerType} />
      </FooterStack>

      <ClientWrapper />
      <SmoothScroller />
    </div>
  );
};

export default PageWrapper;
