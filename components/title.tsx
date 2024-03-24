import { inter } from '@/app/ui/fonts';

export default function Title ({ title } : { title: string }) {
    return (
        <>
            <h1 className="stroke-text tracking-widest opacity-30 lg:opacity-100 absolute top-28 -left-20 md:-left-36">{title}</h1>
            <h1 className="text-5xl lg:text-9xl tracking-widest font-extrabold text-center w-full absolute top-96" style={{ letterSpacing : 25 }}>{title}</h1>
        </>
    );
};
