// 线缆规则（延长线和转接线）
const cableRules = [
      {
        "sourceInterface": "小6芯航空母头",
        "controllerInterface": "小6芯航空母头",
        "cable": "JLCC-6P(G)-6P(G)-(L)M-5A-GX16",
        "cableType": "延长线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/idssS36x1gvg"
      },
      {
        "sourceInterface": "小6芯航空公头",
        "controllerInterface": "小6芯航空母头",
        "cable": "JLE-6P(G)-6P(M)-(L)M-5A-GX16",
        "cableType": "延长线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iTT0L36x1s7e"
      },
      {
        "sourceInterface": "大6芯航空公头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P(G)-6P(M)-(L)M-16A-V2",
        "cableType": "延长线",
        "maxCurrent": 16,
        "drawing2D": "https://lbxfxx521.lanzoue.com/i9fT736x22tg"
      },
      {
        "sourceInterface": "大6芯航空公头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P(G)-6P(M)-(L)M-21A-V2",
        "cableType": "延长线",
        "maxCurrent": 21,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iRy9C36x5icd"
      },
      {
        "sourceInterface": "大6芯航空母头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P-6P-(L)M-16A",
        "cableType": "延长线",
        "maxCurrent": 16,
        "drawing2D": "https://lbxfxx521.lanzoue.com/izQMj36x5igh"
      },
      {
        "sourceInterface": "大6芯航空母头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P-6P-(L)M-21A",
        "cableType": "延长线",
        "maxCurrent": 21,
        "drawing2D": "https://lbxfxx521.lanzoue.com/imprj36x5ija"
      },
      {
        "sourceInterface": "1、3针",
        "controllerInterface": "1、3针",
        "cable": "JLE-(L)M-13-Y1",
        "cableType": "延长线",
        "maxCurrent": 3,
        "drawing2D": "https://lbxfxx521.lanzoue.com/izO8P36wyy7c"
      },
      {
        "sourceInterface": "5芯航空接头公头",
        "controllerInterface": "5芯航空接头母头",
        "cable": "JLCC-5P-5P-(L)M-16A",
        "cableType": "转接线",
        "maxCurrent": 16,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iVwa636x5ide"
      },
      {
        "sourceInterface": "5芯航空接头公头",
        "controllerInterface": "5芯航空接头母头",
        "cable": "JLCC-5P-5P-(L)M-21A",
        "cableType": "转接线",
        "maxCurrent": 21,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iUsQB36x6gmh"
      },
      {
        "sourceInterface": "小6芯航空母头",
        "controllerInterface": "5芯航空接头母头",
        "cable": "JLCC-5P(G)-6P(M)-(L)M-16A-V1",
        "cableType": "转接线",
        "maxCurrent": 16,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iYESJ36x6k4d"
      },
      {
        "sourceInterface": "小6芯航空母头",
        "controllerInterface": "5芯航空接头母头",
        "cable": "JLCC-5P(G)-6P(M)-(L)M-21A-V1",
        "cableType": "转接线",
        "maxCurrent": 21,
        "drawing2D": "https://lbxfxx521.lanzoue.com/i9Duj36x6m5g"
      },
      {
        "sourceInterface": "大6芯航空母头",
        "controllerInterface": "5芯航空接头母头",
        "cable": "JLCC-5P-6P-(L)M-16A",
        "cableType": "转接线",
        "maxCurrent": 16,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iXfMu38bwd4h"
      },
      {
        "sourceInterface": "大6芯航空母头",
        "controllerInterface": "5芯航空接头母头",
        "cable": "JLCC-5P-6P-(L)M-21A",
        "cableType": "转接线",
        "maxCurrent": 21,
        "drawing2D": "https://lbxfxx521.lanzoue.com/i13Zo38bwg6h"
      },
      {
        "sourceInterface": "小6芯航空公头",
        "controllerInterface": "5芯航空接头母头",
        "cable": "JLCC-5P(G)-6P(G)-GX16-(L)M-5A",
        "cableType": "转接线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iCOcR38bwood"
      },
      {
        "sourceInterface": "大6芯航空公头",
        "controllerInterface": "5芯航空接头母头",
        "cable": "JLCC-5P(G)-6P(M)-GX16-(L)M-5A",
        "cableType": "转接线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/ioxYt38bwk2h"
      },
      {
        "sourceInterface": "5芯航空接头公头",
        "controllerInterface": "小6芯航空母头",
        "cable": "JLCC-GX16(G)-6P(M)-(L)M-V1",
        "cableType": "转接线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/ia1Eb38bx9qb"
      },
      {
        "sourceInterface": "大6芯航空母头",
        "controllerInterface": "小6芯航空母头",
        "cable": "JLCC-6P(G)-6P(G)-GX16-(L)M-5A",
        "cableType": "转接线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/i4bp438bwqbc"
      },
      {
        "sourceInterface": "大6芯航空公头",
        "controllerInterface": "小6芯航空母头",
        "cable": "JLCC-6P(G)-6P(M)-GX16-(L)M-5A",
        "cableType": "转接线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iZE0338bx84d"
      },
      {
        "sourceInterface": "5芯航空接头母头",
        "controllerInterface": "小6芯航空母头",
        "cable": "JLE-6P(G)-5P(M)-(L)M-5A-GX16",
        "cableType": "转接线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/imBuA38bx65c"
      },
      {
        "sourceInterface": "5芯航空接头公头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P-5P-(L)M-16A",
        "cableType": "转接线",
        "maxCurrent": 16,
        "drawing2D": "https://lbxfxx521.lanzoue.com/isqPe38bwx0d"
      },
      {
        "sourceInterface": "5芯航空接头公头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P-5P-(L)M-21A",
        "cableType": "转接线",
        "maxCurrent": 21,
        "drawing2D": "https://lbxfxx521.lanzoue.com/im5rr38bwuza"
      },
      {
        "sourceInterface": "小6芯航空母头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P(G)-6P(G)-GX16-(L)M-5A",
        "cableType": "转接线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/irRGi38bx0wd"
      },
      {
        "sourceInterface": "小6芯航空公头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLE-6P(G)-6P(M)-(L)M-5A-GX16",
        "cableType": "转接线",
        "maxCurrent": 5,
        "drawing2D": "https://lbxfxx521.lanzoue.com/iqn2s38bwryb"
      },
      {
        "sourceInterface": "5芯航空接头母头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P-5P-(L)M-16A",
        "cableType": "转接线",
        "maxCurrent": 16,
        "drawing2D": "https://lbxfxx521.lanzoue.com/isqPe38bwx0d"
      },
      {
        "sourceInterface": "5芯航空接头母头",
        "controllerInterface": "大6芯航空母头",
        "cable": "JLCC-6P-5P-(L)M-21A",
        "cableType": "转接线",
        "maxCurrent": 21,
        "drawing2D": "https://lbxfxx521.lanzoue.com/im5rr38bwuza"
      }
    ];