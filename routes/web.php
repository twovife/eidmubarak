<?php

use App\Http\Controllers\MantenanceController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [MantenanceController::class, 'index'])->name('index');

// require __DIR__.'/auth.php';
