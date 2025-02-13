<?php

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Stripe\Stripe;
use Stripe\Charge;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\BusinessController;


Route::get('/search', [SearchController::class, 'search']);
Route::middleware('auth:sanctum')->group(function () {
Route::post('/cart', [CartController::class, 'saveCart']);
 Route::get('/cart', [CartController::class, 'getCart']);
});
Route::post('/register-business', [BusinessController::class, 'register']);
Route::post('/checkout', function (Request $request) {
    Stripe::setApiKey(env('STRIPE_SECRET'));

    try {
        $charge = Charge::create([
            "amount" => $request->amount * 100,
            "currency" => "eur",
            "source" => $request->token,
            "description" => "Payment from IPKO.ai"
        ]);

         // Ruajtja e faturës në bazën e të dhënave
         $invoice = Invoice::create([
            'invoice_number' => 'INV-' . strtoupper(uniqid()),
            'user_id' => auth()->id(),
            'amount' => $request->amount,
            'status' => 'paid',
            'payment_method' => 'Stripe'
        ]);

        return response()->json(['message' => 'Payment successful']);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
    
});
Route::get('/invoices/{invoice}/download', function (Invoice $invoice) {
    $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.invoice', ['invoice' => $invoice]);
    return $pdf->download('invoice-' . $invoice->invoice_number . '.pdf');
});

