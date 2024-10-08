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

var atan2 = require( '@stdlib/math-base-special-atan2' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );


// MAIN //

/**
* Computes the argument of a double-precision complex floating-point number in radians.
*
* @param {Complex128} z - complex number
* @returns {number} argument
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var phi = cphase( new Complex128( 5.0, 3.0 ) );
* // returns ~0.5404
*/
function cphase( z ) {
	return atan2( imag( z ), real( z ) );
}


// EXPORTS //

module.exports = cphase;
