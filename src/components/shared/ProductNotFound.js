'use client';
import { useTranslations } from 'next-intl';

const ProductNotFound = () => {
  const t = useTranslations('common');
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2>{t('product_not_found')}</h2>
          <p>{t('page_not_found_desc')}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;

