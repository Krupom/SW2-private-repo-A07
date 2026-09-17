import Image from "next/image";

export default async function VenueDetailPage( {params} : {params: Promise<{vid: string}>} ) {
    const { vid } = await params;
    //mock data for venues
    const mockVenues = new Map()
    mockVenues.set("001", { venueName: 'The Bloom Pavilion', imgSrc: '/img/bloom.jpg' });
    mockVenues.set("002", { venueName: 'Spark Space', imgSrc: '/img/sparkspace.jpg' });
    mockVenues.set("003", { venueName: 'The Grand Table ', imgSrc: '/img/grandtable.jpg' });
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Venue ID: {vid}</h1>
            <div className="flex flex-row my-5">
                <Image
                    src={mockVenues.get(vid).imgSrc}
                    alt="Venue Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-md mx-5">
                    { mockVenues.get(vid).venueName }
                </div>
            </div>

        </main>
    );
}

export async function generateStaticParams() {

    return [{vid: "001"}, {vid: "002"}, {vid: "003"}];

}