"use client";

import React from 'react';
import TerrainMap from '../terrain/TerrainMap';

const TiledImagePage = () => {
  const s2s = (size: number) => size * 6.81;
  const leftOffset = s2s(-6.5);
  const imgSize = 600;
  const objectiveRadius = s2s(3.75);  // half of 7.5" objective marker
  const innerObjectiveRadius = s2s(1);// half of 2" objective marker

  const baseImages = Array.from({ length: 8 }, (_, i) => ({
    label: `Map ${i + 1}`,
    component: <TerrainMap layoutType="GWPariahLayout" layoutNumber={i + 1} />
  }));

  const overlayShapes = [
    {
      label: 'Hammer and Anvil',
      objectives: [
        { x: leftOffset + s2s(10), y: s2s(22) }, // Left
        { x: leftOffset + s2s(30), y: s2s(6) }, // Top
        { x: leftOffset + s2s(30), y: s2s(22) }, // Center
        { x: leftOffset + s2s(30), y: s2s(44-6) }, // Bottom
        { x: leftOffset + s2s(60-10), y: s2s(22) } // Right
      ],
      shadedAreas: [
        { type: 'rectangular', color: 'rgba(0, 255, 0, 0.2)', points: [
          { x: leftOffset, y: 0, width: s2s(18), height: s2s(44) }
        ] },
        { type: 'rectangular', color: 'rgba(255, 0, 0, 0.3)', points: [
          { x: leftOffset + s2s(60-18), y: 0, width: s2s(18), height: s2s(44) }
        ] }
      ]
    },
    {
      label: 'Tipping Point',
      objectives: [
        { x: leftOffset + s2s(22), y: s2s(8) },
        { x: leftOffset + s2s(60-14), y: s2s(10) },
        { x: leftOffset + s2s(30), y: s2s(22) },
        { x: leftOffset + s2s(14), y: s2s(44-10) },
        { x: leftOffset + s2s(60-22), y: s2s(44-8) }
      ],
      shadedAreas: [
        { type: 'rectangular', color: 'rgba(0, 255, 0, 0.2)', points: [
          { x: leftOffset, y: 0, width: s2s(12), height: s2s(22) }
        ] },
        { type: 'rectangular', color: 'rgba(0, 255, 0, 0.2)', points: [
          { x: leftOffset, y: s2s(22), width: s2s(20), height: s2s(22) }
        ] },
        { type: 'rectangular', color: 'rgba(255, 0, 0, 0.3)', points: [
          { x: leftOffset + s2s(60-20), y: 0, width: s2s(20), height: s2s(22) }
        ] },
        { type: 'rectangular', color: 'rgba(255, 0, 0, 0.3)', points: [
          { x: leftOffset + s2s(60-12), y: s2s(22), width: s2s(12), height: s2s(22) }
        ] }
      ]
    },
    {
      label: 'Crucible of Battle',
      objectives: [
        { x: leftOffset + s2s(20), y: s2s(8) }, // Left
        { x: leftOffset + s2s(60-14), y: s2s(10) }, // Top
        { x: leftOffset + s2s(30), y: s2s(22) }, // Center
        { x: leftOffset + s2s(14), y: s2s(44-10) }, // Bottom
        { x: leftOffset + s2s(60-20), y: s2s(44-8) } // Right
      ],
      shadedAreas: [
        { type: 'triangular', color: 'rgba(0, 255, 0, 0.2)', points: [
          { x: leftOffset, y: 0 },
          { x: leftOffset, y: s2s(44) },
          { x: leftOffset + s2s(30), y: s2s(44) }
        ] },
        { type: 'triangular', color: 'rgba(255, 0, 0, 0.3)', points: [
          { x: leftOffset + s2s(30), y: 0 },
          { x: leftOffset + s2s(60), y: 0 },
          { x: leftOffset + s2s(60), y: s2s(44) }
        ] }
      ]
    },
    {
      label: 'Search and Destroy',
      objectives: [
        { x: leftOffset + s2s(14), y: s2s(10) }, // Left
        { x: leftOffset + s2s(60-14), y: s2s(10) }, // Top
        { x: leftOffset + s2s(30), y: s2s(22) }, // Center
        { x: leftOffset + s2s(14), y: s2s(44-10) }, // Bottom
        { x: leftOffset + s2s(60-14), y: s2s(44-10) } // Right
      ],
      shadedAreas: [
        { type: 'rectangular', color: 'rgba(0, 255, 0, 0.2)', points: [
            { x: leftOffset, y: s2s(22), width: s2s(30), height: s2s(22) }
          ], 
          subtractCircle: { x: leftOffset + s2s(30), y: s2s(22), radius: s2s(9) } 
        },
        { type: 'rectangular', color: 'rgba(255, 0, 0, 0.3)', points: [
            { x: leftOffset + s2s(30), y: 0, width: s2s(30), height: s2s(22) }
          ], 
          subtractCircle: { x: leftOffset + s2s(30), y: s2s(22), radius: s2s(9) } 
        }
      ]
    },
    {
      label: 'Sweeping Engagement',
      objectives: [
        { x: leftOffset + s2s(10), y: s2s(18) }, // Left
        { x: leftOffset + s2s(18), y: s2s(44-6) }, // Top
        { x: leftOffset + s2s(30), y: s2s(22) }, // Center
        { x: leftOffset + s2s(60-18), y: s2s(6) }, // Bottom
        { x: leftOffset + s2s(60-10), y: s2s(44-18) } // Right
      ],
      shadedAreas: [
        { type: 'rectangular', color: 'rgba(255, 0, 0, 0.3)', points: [
          { x: leftOffset, y: 0, width: s2s(30), height: s2s(8) }
        ] },
        { type: 'rectangular', color: 'rgba(255, 0, 0, 0.3)', points: [
          { x: leftOffset + s2s(30), y: 0, width: s2s(30), height: s2s(14) }
        ] },
        { type: 'rectangular', color: 'rgba(0, 255, 0, 0.2)', points: [
          { x: leftOffset, y: s2s(44-14), width: s2s(30), height: s2s(44) }
        ] },
        { type: 'rectangular', color: 'rgba(0, 255, 0, 0.2)', points: [
          { x: leftOffset + s2s(30), y: s2s(44-8), width: s2s(30), height: s2s(44) }
        ] },
      ]
    },
    {
      label: 'Dawn of War',
      objectives: [
        { x: leftOffset + s2s(10), y: s2s(22) }, // Left
        { x: leftOffset + s2s(30), y: s2s(6) }, // Top
        { x: leftOffset + s2s(30), y: s2s(22) }, // Center
        { x: leftOffset + s2s(30), y: s2s(44-6) }, // Bottom
        { x: leftOffset + s2s(60-10), y: s2s(44-22) } // Right
      ],
      shadedAreas: [
        { type: 'rectangular', color: 'rgba(0, 255, 0, 0.2)', points: [
          { x: leftOffset, y: 0, width: s2s(60), height: s2s(12) }
        ] },
        { type: 'rectangular', color: 'rgba(255, 0, 0, 0.3)', points: [
          { x: leftOffset, y: s2s(44-12), width: s2s(60), height: s2s(12) }
        ] }
      ]
    },
  ];

  const deploymentZonesLayouts = {
    "Hammer and Anvil":     [1,7,8],
    "Tipping Point":        [1,2,4,6,7,8],
    "Crucible of Battle":   [1,2,4,6,8],
    "Search and Destroy":   [1,2,3,4,6],
    "Sweeping Engagement":  [3,5],
    "Dawn of War":          [5]
  };

  const isCombinationAllowed = (baseLabel: string, overlayLabel: string) => {
    const baseIndex = baseImages.findIndex(base => base.label === baseLabel) + 1;
    return deploymentZonesLayouts[overlayLabel].includes(baseIndex) ? 1 : 0;
  };

  return (
    <div className="app-container">
      <h1>Image Tiling Page</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              {baseImages.map((base, index) => (
                <th key={index} className="header-cell">
                  <div className="image-label">{base.label}</div>
                  <div className="layout-number">Layout {index + 1}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {overlayShapes.map((overlay, rowIndex) => (
              <tr key={rowIndex}>
                <td className="header-cell">
                  <div className="image-label">{overlay.label}</div>
                </td>
                {baseImages.map((base, colIndex) => (
                  <td key={colIndex} className="image-cell">
                    <div className="image-wrapper">
                      {base.component}
                      <svg className="overlay-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        {isCombinationAllowed(base.label, overlay.label) ? (
                            <React.Fragment>
                            {overlay.objectives.map((obj, objIndex) => (
                              <React.Fragment key={objIndex}>
                                <circle cx={obj.x} cy={obj.y} r={objectiveRadius} fill="url(#stripedPattern)" stroke="black" strokeWidth="0.5" />
                                <circle cx={obj.x} cy={obj.y} r={innerObjectiveRadius} fill="url(#inversePattern)" />
                              </React.Fragment>
                            ))}
                            <defs>
                              <pattern id="stripedPattern" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                                <rect width="4" height="8" transform="translate(0,0)" fill="yellow" fillOpacity="0.6"></rect>
                                <rect width="4" height="8" transform="translate(4,0)" fill="black" fillOpacity="0.88"></rect>
                              </pattern>
                              <pattern id="inversePattern" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                                <rect width="4" height="8" transform="translate(0,0)" fill="black" fillOpacity="1"></rect>
                                <rect width="4" height="8" transform="translate(4,0)" fill="yellow" fillOpacity="1"></rect>
                              </pattern>
                            </defs>
                            {overlay.shadedAreas.map((area, areaIndex) => {
                              const { subtractCircle } = area;
                              const maskId = `mask-${areaIndex}`;

                              return (
                                <React.Fragment key={areaIndex}>
                            
                                  {subtractCircle && (
                                    <defs>
                                      <mask id={maskId}>
                                        <rect
                                          x={leftOffset}
                                          y="0"
                                          width={s2s(60)}
                                          height={s2s(44)}
                                          fill="white"
                                        />
                                        <circle
                                          cx={subtractCircle.x}
                                          cy={subtractCircle.y}
                                          r={subtractCircle.radius}
                                          fill="black"
                                        />
                                      </mask>
                                    </defs>
                                  )}
                            
                                  {(() => {
                                    if (area.type === 'diagonal') {
                                      return (
                                        <line
                                          x1={area.points[0].x}
                                          y1={area.points[0].y}
                                          x2={area.points[1].x}
                                          y2={area.points[1].y}
                                          stroke={area.color}
                                          strokeWidth="10"
                                          mask={subtractCircle ? `url(#${maskId})` : undefined}
                                        />
                                      );
                                    }
                                    else if (area.type === 'rectangular') {
                                      return area.points.map((pt, i) => (
                                        <rect
                                          key={i}
                                          x={pt.x}
                                          y={pt.y}
                                          width={pt.width}
                                          height={pt.height}
                                          fill={area.color}
                                          mask={subtractCircle ? `url(#${maskId})` : undefined}
                                        />
                                      ));
                                    }
                                    else if (area.type === 'triangular') {
                                      const pointsStr = area.points.map(p => `${p.x},${p.y}`).join(' ');
                                      return (
                                        <polygon
                                          points={pointsStr}
                                          fill={area.color}
                                          mask={subtractCircle ? `url(#${maskId})` : undefined}
                                        />
                                      );
                                    }
                                    return null;
                                  })()}
                                </React.Fragment>
                              );
                            })}
                            </React.Fragment>
                        ) : (
                          <rect x={leftOffset} width={s2s(60)} height="100%" fill="black" />
                        )}
                      </svg>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .app-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          max-width: 1000px;
          margin: auto;
        }

        h1 {
          text-align: center;
        }

        .table-container {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #ccc;
          text-align: center;
          vertical-align: middle;
        }

        .header-cell {
          padding: 10px;
          background-color: #333;
        }

        .image-label {
          margin-bottom: 5px;
          font-weight: bold;
        }

        .image-cell {
          position: relative;
        }

        .image-wrapper {
          position: relative;
          width: ${imgSize}px;
        }

        .overlay-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default TiledImagePage;
