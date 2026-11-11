import Image from 'next/image';

/**
 * The real Ulkhad Pharaon identity, used everywhere the site used to show a
 * generic "UP" monogram. The emblem is the film-strip / sound-wave mark; the
 * lockup adds the ULKHAD PHARAON wordmark.
 */
export function BrandMark({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <span className="brand-emblem">
        <Image
          src="/media/brand/ulkhad-mark.png"
          alt=""
          width={512}
          height={240}
          sizes="(max-width: 980px) 0px, 44px"
          priority
          className="brand-emblem__img"
        />
      </span>
    );
  }

  return (
    <span className="brand-emblem brand-emblem--full">
      <Image
        src="/media/brand/ulkhad-logo.jpg"
        alt="Ulkhad Pharaon — African Audiovisual Empire"
        width={900}
        height={900}
        sizes="(max-width: 900px) 60vw, 220px"
        className="brand-emblem__img"
      />
    </span>
  );
}
