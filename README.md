<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# cphase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [argument][complex-number-argument] of a double-precision complex floating-point number in radians.

<section class="intro">

The [argument][complex-number-argument] of a complex number, also known as the **phase**, is the angle of the radius extending from the origin to the complex number plotted in the complex plane and the positive real axis.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
cphase = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cphase@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cphase = require( 'path/to/vendor/umd/math-base-special-cphase/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cphase@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cphase;
})();
</script>
```

#### cphase( z )

Computes the [argument][complex-number-argument] of a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex-float64' );

var phi = cphase( new Complex128( 5.0, 3.0 ) );
// returns ~0.5404
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cphase@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var z;
var i;

for ( i = 0; i < 100; i++ ) {
    z = new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) );
    console.log( 'arg(%s) = %d', z.toString(), cphase( z ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cabs`][@stdlib/math/base/special/cabs]</span><span class="delimiter">: </span><span class="description">compute an absolute value of a complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cphase.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cphase

[test-image]: https://github.com/stdlib-js/math-base-special-cphase/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cphase/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cphase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cphase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cphase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cphase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cphase/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cphase/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cphase/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cphase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cphase/main/LICENSE

[complex-number-argument]: https://en.wikipedia.org/wiki/Argument_%28complex_analysis%29

<!-- <related-links> -->

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math-base-special-cabs/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
