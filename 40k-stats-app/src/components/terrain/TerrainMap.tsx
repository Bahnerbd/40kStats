import React, { JSX } from 'react';
import Image from 'next/image';

const TerrainMap = ({ layoutType, layoutNumber }: { layoutType: string, layoutNumber: number }): JSX.Element => {
    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <Image
            src={`/terrain/${layoutType}${layoutNumber}.png`}
            alt={`Base Image ${layoutNumber}`}
            width={2151}
            height={1506}
            layout="responsive"
            />
        </div>
    )
}

export default TerrainMap;
