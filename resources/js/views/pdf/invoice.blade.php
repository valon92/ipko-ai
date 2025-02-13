<!DOCTYPE html>
<html>
<head>
    <title>Invoice</title>
</head>
<body>
    <h2>Invoice {{ $invoice->invoice_number }}</h2>
    <p>Amount: €{{ $invoice->amount }}</p>
    <p>Status: {{ ucfirst($invoice->status) }}</p>
    <p>Thank you for your business.</p>
</body>
</html>
