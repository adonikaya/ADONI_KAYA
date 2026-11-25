'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { TemplateGallery } from '@/components/gallery/TemplateGallery';
import { CardTemplate, TemplateCategory } from '@/lib/types';

function GalleryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const typeParam = searchParams.get('type') as 'shradhanjali' | 'besna' | null;
  const categoryParam = searchParams.get('category') as TemplateCategory | null;

  const handleSelectTemplate = (template: CardTemplate) => {
    // Navigate to homepage wizard with selected template
    window.sessionStorage.setItem('adoni_kaya_new_creation', 'true');
    router.push(`/?type=${template.category === 'besna' ? 'besna' : 'shradhanjali'}&template=${template.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-black text-brand-maroon font-serifGujarati">
          ગુજરાતી ટેમ્પલેટ ગેલેરી
        </h1>
        <p className="text-sm text-gray-600 font-gujarati mt-1">
          શ્રદ્ધાંજલિ, બેસણું, રબારી આભલા શૈલી અને પુણ્યતિથિ માટે ૧,૦૦૦+ સપોર્ટેડ ટેમ્પલેટ્સ
        </p>
      </div>

      <TemplateGallery
        initialType={typeParam || undefined}
        initialCategory={categoryParam || undefined}
        onSelectTemplate={handleSelectTemplate}
      />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl space-y-4 px-4 py-16 text-center sm:px-6">
          <h1 className="font-serifGujarati text-3xl font-black text-brand-maroon">
            ગુજરાતી શ્રદ્ધાંજલિ અને બેસણું ટેમ્પલેટ ગેલેરી
          </h1>
          <p className="font-gujarati leading-8 text-gray-700">
            શ્રદ્ધાંજલિ, બેસણું અને અન્ય ગુજરાતી સ્મૃતિ કાર્ડ માટે ઉપલબ્ધ ડિઝાઇન્સ જુઓ.
            ટેમ્પલેટ પસંદ કર્યા પછી વિગતો ભરીને કાર્ડ તૈયાર કરો.
          </p>
          <Link className="text-brand-saffron underline" href="/shradhanjali-maker/">
            શ્રદ્ધાંજલિ કાર્ડ બનાવવાની રીત
          </Link>
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}

