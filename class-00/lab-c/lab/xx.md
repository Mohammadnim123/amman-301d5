# Responsive Web Design

>Have you ever wondered how can websites possibly keep up with the millions of screens out there? With responsive website design, your website (and its pages) can adapt and deliver the best experience to users, whether they’re on their desktop, laptop, tablet, or smartphone. For that to happen, though, your website needs a responsive design.

_How does responsive web design work?_
Responsive web design works through Cascading Style Sheets (CSS), using various settings to serve different style properties depending on the screen size, orientation, resolution, color capability, and other characteristics of the user’s device. A few examples of CSS properties related to responsive web design include the viewport and media queries.

**Responsive vs. Adaptive vs. Mobile**
1. Responsive generally means to react quickly and positively to any change

1. Adaptive means to be easily modified for a new purpose or situation, such as change

1. Mobile means to build a separate website commonly on a new domain solely for mobile users.

**Responsive web design is broken down into three main components, including:**

_**Flexible Layouts:**_
flexible layouts, is the practice of building the layout of a website with a flexible grid, capable of dynamically resizing to any width. Flexible grids are built using relative length units, most commonly percentages or em units. These relative lengths are then used to declare common grid property values such as width, margin, or padding.

Flexible layouts do not advocate the use of fixed measurement units, such as pixels or inches. Reason being, the viewport height and width continually change from device to device. Website layouts need to adapt to this change and fixed values have too many constraints

The formula is based around taking the target width of an element and dividing it by the width of it’s parent element. The result is the relative width of the target element.

_**Media Queries**_
`Viewport Height & Width: <meta name="viewport" content="width=device-width">.`
`Viewport Scale : <meta name="viewport" content="initial-scale=2">.`
`Viewport Resolution : <meta name="viewport" content="target-densitydpi=device-dpi">.`
`Combining Viewport Values : <meta name="viewport" content="width=device-width, initial-scale=1">.`

_**Flexible Media**_
The final, equally important aspect to responsive web design involves flexible media. As viewports begin to change size media doesn’t always follow suit. Images, videos, and other media types need to be scalable, changing their size as the size of the viewport changes. (Links to an external site.)
One quick way to make media scalable is by using the max-width property with a value of 100%. Doing so ensures that as the viewport gets smaller any media will scale down according to its containers width.

# What is “Float”?

Float is a CSS positioning property. To understand its purpose and origin, we can look to print design. In a print layout, images may be set into the page such that text wraps around them as needed. This is commonly and appropriately called “text wrap”. Here is an example of that.
In page layout programs, the boxes that hold the text can be told to honor the text wrap, or to ignore it. Ignoring the text wrap will allow the words to flow right over the image like it wasn’t even there. This is the difference between that image being part of the flow of the page (or not). Web design is very similar.
What are floats used for?
Aside from the simple example of wrapping text around images, floats can be used to create entire web layouts.

# What is SMACSS?

SMACSS (pronounced “smacks”) is more style guide than rigid framework. There is no library within here for you to download or install. There is no git repository for you to clone. SMACSS is a way to examine your design process and as a way to fit those rigid frameworks into a flexible thought process. It is an attempt to document a consistent approach to site development when using CSS. 