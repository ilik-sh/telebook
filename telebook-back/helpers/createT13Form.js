const {
  Table,
  TableRow,
  TableCell,
  Paragraph,
  Packer,
  Document,
  PageOrientation,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  VerticalAlign,
  WidthType,
} = require("docx");
const fs = require("fs");
const countHours = require("./countHours");

module.exports = async function createT13Form(entries) {
  const hours = countHours(entries);

  const topDayRow = new Array(16).fill(0).map((_, index) => {
    return new TableCell({
      rowSpan: 4,
      verticalAlign: VerticalAlign.CENTER,
      alignment: AlignmentType.CENTER,
      children: [new Paragraph(`${index == 15 ? "X" : index + 1}`)],
    });
  });

  const bottomDayRow = new Array(16).fill(0).map((_, index) => {
    return new TableCell({
      rowSpan: 2,
      verticalAlign: VerticalAlign.CENTER,
      alignment: AlignmentType.CENTER,
      children: [new Paragraph(`${index + 16}`)],
    });
  });

  const header = [
    new TableRow({
      children: [
        new TableCell({
          rowSpan: 7,
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [new Paragraph("Номер по порядку")],
        }),
        new TableCell({
          rowSpan: 7,
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [new Paragraph("ФИО")],
        }),
        new TableCell({
          rowSpan: 7,
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [new Paragraph("Табельный номер")],
        }),
        new TableCell({
          columnSpan: 16,
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [
            new Paragraph(
              "Отметки о явках и неявках на работу по числам месяца"
            ),
          ],
        }),
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [new Paragraph("Отработано за")],
        }),
        new TableCell({
          columnSpan: 6,
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [
            new Paragraph(
              "Данные для начисления заработной платы по видам и направлениям затрат"
            ),
          ],
        }),
      ],
    }),
    new TableRow({
      children: [
        ...topDayRow,
        new TableCell({
          rowSpan: 4,
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [new Paragraph("месяц")],
        }),
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          columnSpan: 6,
          children: [new Paragraph("код вида оплаты")],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          columnSpan: 6,
          children: [new Paragraph(" ")],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          columnSpan: 6,
          children: [new Paragraph("корреспондирующий счет")],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          columnSpan: 6,
          children: [new Paragraph(" ")],
        }),
      ],
    }),
    new TableRow({
      children: [
        ...bottomDayRow,
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [new Paragraph("дни")],
        }),
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          rowSpan: 2,
          children: [new Paragraph("код вида оплаты")],
        }),
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          rowSpan: 2,
          children: [new Paragraph("корреспондирующий счет")],
        }),
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          rowSpan: 2,
          children: [new Paragraph("дни (часы)")],
        }),
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          rowSpan: 2,
          children: [new Paragraph("код вида оплаты")],
        }),
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          rowSpan: 2,
          children: [new Paragraph("корреспондирующий счет")],
        }),
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          rowSpan: 2,
          children: [new Paragraph("дни (часы)")],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [new Paragraph("часы")],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          alignment: AlignmentType.CENTER,
          children: [new Paragraph("1")],
        }),
        new TableCell({ children: [new Paragraph("2")] }),
        new TableCell({ children: [new Paragraph("3")] }),
        new TableCell({ columnSpan: 16, children: [new Paragraph("4")] }),
        new TableCell({ children: [new Paragraph("5")] }),
        new TableCell({ children: [new Paragraph("6")] }),
        new TableCell({ children: [new Paragraph("7")] }),
        new TableCell({ children: [new Paragraph("8")] }),
        new TableCell({ children: [new Paragraph("9")] }),
        new TableCell({ children: [new Paragraph("10")] }),
        new TableCell({ children: [new Paragraph("11")] }),
      ],
    }),
  ];

  const documentTable = new Table({
    columnWidths: [3505, 5505],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: {
              top: { style: BorderStyle.NIL },
              bottom: { style: BorderStyle.NIL },
              left: { style: BorderStyle.NIL },
              right: { style: BorderStyle.NIL },
            },
            children: [
              new Table({
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph("Номер документа")],
                      }),
                      new TableCell({
                        children: [new Paragraph("Дата составления")],
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph("1")],
                        rowSpan: 2,
                      }),
                      new TableCell({
                        children: [new Paragraph("21.08.2024")],
                        rowSpan: 2,
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [],
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            borders: {
              top: { style: BorderStyle.NIL },
              bottom: { style: BorderStyle.NIL },
              left: { style: BorderStyle.NIL },
              right: { style: BorderStyle.NIL },
            },
            children: [
              new Table({
                indent: {
                  size: 8400,
                  type: WidthType.DXA,
                },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        columnSpan: 2,
                        children: [new Paragraph("Отчетный период")],
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph("c")],
                      }),
                      new TableCell({
                        children: [new Paragraph("по")],
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph("21.07.2024")],
                      }),
                      new TableCell({
                        children: [new Paragraph("21.08.2024")],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  const dataCellsTopEntries = new Array(16).fill(0).map((_, index) => {
    return new TableCell({
      verticalAlign: VerticalAlign.CENTER,
      alignment: AlignmentType.CENTER,
      children: [new Paragraph(`${hours[index + 1] ? "Я" : "ОТ"}`)],
    });
  });

  const dataCellsTopHours = new Array(16).fill(0).map((_, index) => {
    return new TableCell({
      verticalAlign: VerticalAlign.CENTER,
      alignment: AlignmentType.CENTER,
      children: [new Paragraph(`${hours[index + 1] ? hours[index + 1] : " "}`)],
    });
  });

  const dataCellsBottomEntries = new Array(16).fill(0).map((_, index) => {
    return new TableCell({
      verticalAlign: VerticalAlign.CENTER,
      alignment: AlignmentType.CENTER,
      children: [new Paragraph(`${hours[index + 16] ? "Я" : "ОТ"}`)],
    });
  });

  const dataCellsBottomHours = new Array(16).fill(0).map((_, index) => {
    return new TableCell({
      verticalAlign: VerticalAlign.CENTER,
      alignment: AlignmentType.CENTER,
      children: [
        new Paragraph(`${hours[index + 16] ? hours[index + 16] : " "}`),
      ],
    });
  });

  const employeeRows = [
    new TableRow({
      children: [
        new TableCell({
          rowSpan: 4,
          children: [new Paragraph({ text: `1` })],
        }),
        new TableCell({
          rowSpan: 4,
          children: [new Paragraph({ text: `${entries[0].employee.name}` })],
        }),
        new TableCell({
          rowSpan: 4,
          children: [new Paragraph({ text: `${entries[0].employeeId}` })],
        }),
        ...dataCellsTopEntries,
        new TableCell({
          rowSpan: 2,
          children: [new Paragraph({ text: `${Object.keys(hours).length}` })],
        }),
        ...new Array(6).fill(0).map((_, index) => {
          return new TableCell({
            verticalAlign: VerticalAlign.CENTER,
            alignment: AlignmentType.CENTER,
            children: [new Paragraph(" ")],
          });
        }),
      ],
    }),
    new TableRow({
      children: [
        ...dataCellsTopHours,
        ...new Array(6).fill(0).map((_, index) => {
          return new TableCell({
            verticalAlign: VerticalAlign.CENTER,
            alignment: AlignmentType.CENTER,
            children: [new Paragraph(" ")],
          });
        }),
      ],
    }),
    new TableRow({
      children: [
        ...dataCellsBottomEntries,
        new TableCell({
          rowSpan: 2,
          children: [
            new Paragraph(
              `${Object.values(hours).reduce((current, next) => {
                return +current + +next;
              }, 0)}`
            ),
          ],
        }),
        ...new Array(6).fill(0).map((_, index) => {
          return new TableCell({
            verticalAlign: VerticalAlign.CENTER,
            alignment: AlignmentType.CENTER,
            children: [new Paragraph(" ")],
          });
        }),
      ],
    }),
    new TableRow({
      children: [
        ...dataCellsBottomHours,
        ...new Array(6).fill(0).map((_, index) => {
          return new TableCell({
            verticalAlign: VerticalAlign.CENTER,
            alignment: AlignmentType.CENTER,
            children: [new Paragraph(" ")],
          });
        }),
      ],
    }),
  ];

  const dataTable = new Table({
    columnWidths: [1000],
    rows: [...header, ...employeeRows],
    width: {
      size: 5000,
      type: WidthType.DXA,
    },
  });

  const document = new Document({
    styles: {
      default: {
        heading1: {
          run: {
            size: 16,
            bold: true,
            color: "FF0000",
          },
          paragraph: {
            spacing: {
              top: 500,
              bottom: 500,
            },
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.LANDSCAPE,
            },
          },
        },
        children: [
          new Paragraph("Унифицированная форма № Т-13"),
          new Paragraph({
            text: `Учреждение образования "Белорусский государственный медицинский университет"`,
            border: {
              bottom: {
                color: "auto",
                style: "single",
                size: 2,
              },
            },
            alignment: AlignmentType.CENTER,
            spacing: {
              before: 200,
            },
          }),
          new Paragraph({
            text: "Наименование организации",
            alignment: AlignmentType.CENTER,
            style: {},
          }),
          new Paragraph({
            text: "Табель учета рабочего времени",
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_1,
          }),
          documentTable,
          new Paragraph(" "),
          dataTable,
        ],
      },
    ],
    styles: {
      default: {},
    },
  });

  const blob = Packer.toBlob(document).then((blob) => {
    console.log(blob);
    return blob;
  });
  return blob;
};
