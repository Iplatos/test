import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const invoices = [
  {
    invoice: '23/03/2123',
    paymentStatus: 'Accrual for 23/05/2024 to 20/11/2024',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: '23/03/2123',
    paymentStatus: 'Accrual for 23/05/2024 to 20/11/2024',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
    earnDays: 3.0,
  },
  {
    invoice: '23/03/2123',
    paymentStatus: 'Accrual for 23/05/2024 to 20/11/2024',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: '23/03/2123',
    paymentStatus: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: -6,
    earnDays: 3.0,
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: '23/03/2123',
    paymentStatus: 'Accrual for 23/05/2024 to 20/11/2024',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: '23/03/2123',
    paymentStatus: 'Accrual for 23/05/2024 to 20/11/2024',
    totalAmount: '$200.00',
    usedDays: -6,
    earnDays: 3.0,
    paymentMethod: 'Bank Transfer',
  },
]

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Used Days</TableHead>
          <TableHead>Earned Days(+)</TableHead>
          <TableHead>Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.totalAmount}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>

            <TableCell>{invoice.usedDays}</TableCell>
            <TableCell>{invoice.earnDays}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
