<!DOCTYPE html>
<html>
<head>
    <title>Your Invoice</title>
</head>
<body>
    <h2>Invoice {{ $invoiceNumber }}</h2>
    <p>Amount: €{{ $amount }}</p>
    <p>Status: {{ ucfirst($status) }}</p>
    <p>Thank you for your payment.</p>
</body>
</html>
