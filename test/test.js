/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PI = require( '@stdlib/constants-float64-pi' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var cphase = require( './../lib' );


// FIXTURES //

var positivePositive = require( './fixtures/julia/positive_positive.json' );
var negativePositive = require( './fixtures/julia/negative_positive.json' );
var negativeNegative = require( './fixtures/julia/negative_negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cphase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` as either of the arguments', function test( t ) {
	t.strictEqual( isnan( cphase( new Complex128( 2.0, NaN ) ) ), true, 'returns NaN' );
	t.strictEqual( isnan( cphase( new Complex128( NaN, 3.0 ) ) ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `+0` if provided `im = +0.0` and `re >= 0`', function test( t ) {
	t.strictEqual( cphase( new Complex128( 0.0, +0.0) ), +0.0, 'returns +0' );
	t.strictEqual( cphase( new Complex128( 2.0, +0.0) ), +0.0, 'returns +0' );
	t.strictEqual( cphase( new Complex128( 4.0, +0.0) ), +0.0, 'returns +0' );
	t.strictEqual( cphase( new Complex128( 5.0, +0.0) ), +0.0, 'returns +0' );
	t.strictEqual( cphase( new Complex128( 10.0, +0.0) ), +0.0, 'returns +0' );
	t.end();
});

tape( 'the function returns `-0` if provided `im = -0.0` and `re >= 0`', function test( t ) {
	t.strictEqual( isNegativeZero( cphase( new Complex128( 0.0, -0.0 ) ) ), true, 'returns -0' );
	t.strictEqual( isNegativeZero( cphase( new Complex128( 2.0, -0.0 ) ) ), true, 'returns -0' );
	t.strictEqual( isNegativeZero( cphase( new Complex128( 4.0, -0.0 ) ) ), true, 'returns -0' );
	t.strictEqual( isNegativeZero( cphase( new Complex128( 5.0, -0.0 ) ) ), true, 'returns -0' );
	t.strictEqual( isNegativeZero( cphase( new Complex128( 10.0, -0.0 ) ) ), true, 'returns -0' );
	t.end();
});

tape( 'the function returns `PI` if provided `im = +0.0` and `re <= -0.0`', function test( t ) {
	t.strictEqual( cphase( new Complex128( -0.0, +0.0 ) ), +PI, 'returns +PI' );
	t.strictEqual( cphase( new Complex128( -2.0, +0.0 ) ), +PI, 'returns +PI' );
	t.strictEqual( cphase( new Complex128( -4.0, +0.0 ) ), +PI, 'returns +PI' );
	t.strictEqual( cphase( new Complex128( -5.0, +0.0 ) ), +PI, 'returns +PI' );
	t.strictEqual( cphase( new Complex128( -10.0, +0.0 ) ), +PI, 'returns +PI' );
	t.end();
});

tape( 'the function returns `-PI` if provided `im = -0.0` and `re <= -0.0`', function test( t ) {
	t.strictEqual( cphase( new Complex128( -0.0, -0.0 ) ), -PI, 'returns -PI' );
	t.strictEqual( cphase( new Complex128( -2.0, -0.0 ) ), -PI, 'returns -PI' );
	t.strictEqual( cphase( new Complex128( -4.0, -0.0 ) ), -PI, 'returns -PI' );
	t.strictEqual( cphase( new Complex128( -5.0, -0.0 ) ), -PI, 'returns -PI' );
	t.strictEqual( cphase( new Complex128( -10.0, -0.0 ) ), -PI, 'returns -PI' );
	t.end();
});

tape( 'the function returns `+PI/4` if provided `re = im = +infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( PINF, PINF ) ), +PI/4.0, 'returns +PI/4' );
	t.end();
});

tape( 'the function returns `-PI/4` if provided `re = -im = +infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( PINF, NINF ) ), -PI/4.0, 'returns -PI/4' );
	t.end();
});

tape( 'the function returns `*3*PI/4` if provided `-re = im = +infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( NINF, PINF ) ), +3.0*PI/4.0, 'returns +3*PI/4' );
	t.end();
});

tape( 'the function returns `-3*PI/4` if provided `re = im = -infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( NINF, NINF ) ), -3.0*PI/4.0, 'returns -3*PI/4' );
	t.end();
});

tape( 'the function returns `0.0` when `re = +infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( PINF, -2.0 ) ), 0.0, 'returns 0.0' );
	t.strictEqual( cphase( new Complex128( PINF, 0.0 ) ), 0.0, 'returns 0.0' );
	t.strictEqual( cphase( new Complex128( PINF, 2.0 ) ), 0.0, 'returns 0.0' );
	t.end();
});

tape( 'the function returns `+PI` when `im > 0` and `re = -infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( NINF, 1.0 ) ), PI, 'returns PI' );
	t.strictEqual( cphase( new Complex128( NINF, 2.0 ) ), PI, 'returns PI' );
	t.strictEqual( cphase( new Complex128( NINF, 3.0 ) ), PI, 'returns PI' );
	t.end();
});

tape( 'the function returns `-PI` when `im < 0` and `re = -infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( NINF, -1.0 ) ), -PI, 'returns -PI' );
	t.strictEqual( cphase( new Complex128( NINF, -2.0 ) ), -PI, 'returns -PI' );
	t.strictEqual( cphase( new Complex128( NINF, -3.0 ) ), -PI, 'returns -PI' );
	t.end();
});

tape( 'the function returns `+PI/2` when `im = +infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( -1.0, PINF ) ), PI/2.0, 'returns PI/2' );
	t.strictEqual( cphase( new Complex128( 0.0, PINF ) ), PI/2.0, 'returns PI/2' );
	t.strictEqual( cphase( new Complex128( 2.0, PINF ) ), PI/2.0, 'returns PI/2' );
	t.end();
});

tape( 'the function returns `-PI/2` when `im = -infinity`', function test( t ) {
	t.strictEqual( cphase( new Complex128( -1.0, NINF ) ), -PI/2.0, 'returns -PI/2' );
	t.strictEqual( cphase( new Complex128( 0.0, NINF ) ), -PI/2.0, 'returns -PI/2' );
	t.strictEqual( cphase( new Complex128( 2.0, NINF ) ), -PI/2.0, 'returns -PI/2' );
	t.end();
});

tape( 'the function returns `PI/2` if provided a positive `im` and `re=0`', function test( t ) {
	t.strictEqual( cphase( new Complex128( 0.0, 2.0 ) ), PI/2.0, 'returns PI/2' );
	t.strictEqual( cphase( new Complex128( 0.0, 1.0 ) ), PI/2.0, 'returns PI/2' );
	t.strictEqual( cphase( new Complex128( 0.0, 0.5 ) ), PI/2.0, 'returns PI/2' );
	t.end();
});

tape( 'the function returns `-PI/2` if provided a negative `im` and `re=0`', function test( t ) {
	t.strictEqual( cphase( new Complex128( 0.0, -2.0 ) ), -PI/2.0, 'returns PI/2' );
	t.strictEqual( cphase( new Complex128( 0.0, -1.0 ) ), -PI/2.0, 'returns PI/2' );
	t.strictEqual( cphase( new Complex128( 0.0, -0.5 ) ), -PI/2.0, 'returns PI/2' );
	t.end();
});

tape( 'the function computes the argument of a complex number (when `re` and `im` are positive)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var re;
	var im;
	var i;

	re = positivePositive.re;
	im = positivePositive.im;
	expected = positivePositive.expected;
	for ( i = 0; i < re.length; i++ ) {
		actual = cphase( new Complex128( re[i], im[i] ) );
		delta = abs( actual - expected[i] );
		tol = EPS * abs( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. re: '+re[i]+'. im: '+im[i]+'. Actual: '+actual+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
	}
	t.end();
});

tape( 'the function computes the argument of a complex number (when `re` is negative and `im` is positive)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var re;
	var im;
	var i;

	re = negativePositive.re;
	im = negativePositive.im;
	expected = negativePositive.expected;
	for ( i = 0; i < re.length; i++ ) {
		actual = cphase( new Complex128( re[i], im[i] ) );
		delta = abs( actual - expected[i] );
		tol = 2.0 * EPS * abs( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. re: '+re[i]+'. im: '+im[i]+'. Actual: '+actual+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
	}
	t.end();
});

tape( 'the function computes the argument of a complex number (when `re` and `im` are negative)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var re;
	var im;
	var i;

	re = negativeNegative.re;
	im = negativeNegative.im;
	expected = negativeNegative.expected;
	for ( i = 0; i < re.length; i++ ) {
		actual = cphase( new Complex128( re[i], im[i] ) );
		delta = abs( actual - expected[i] );
		tol = 2.0 * EPS * abs( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. re: '+re[i]+'. im: '+im[i]+'. Actual: '+actual+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
	}
	t.end();
});
