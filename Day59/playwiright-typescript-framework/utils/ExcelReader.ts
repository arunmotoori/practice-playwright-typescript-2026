import ExcelJS from 'exceljs';

export async function getCellValue(
    filePath: string,
    sheetName: string,
    row: number,
    column: number
) {
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(sheetName);

    if (!worksheet) {
        throw new Error(`Sheet '${sheetName}' not found`);
    }

    return worksheet.getRow(row).getCell(column).text;
}
