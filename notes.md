we recognize only 4 dimensions
0th-A point with no size
1st-A line with no width or dimension
2nd-A shape with length and width but no depth
3rd-A shape with length,width and depth giving them volume
4th Dimension-The 4th dimension is time. It is the dimension that allows us to move through the past
present and future. It is the dimension that allows us to experience the world around us. It is the dimension that allows us to learn and grow. It is the dimension that allows us to live and
die.

Three.js
it's javascript library and an API built on top of WebGL, or Web Graphics Library. It allows you to create 3D graphics in the web.
in three.js we create an environment and a scene through code shaping it with our own rules it's our virtual world
where everything
Don't mix up the environment and the scene . The environment is the overall container or space where the scene is placed. The scene is the objects that are placed
each scene is like it's own world with its own rules and laws. We can have multiple scenes in one environment. We can
have multiple environments in one scene.

3js Cameras are our eyes
Our Brain is the renderer-a renderer brings everything together on the screen

3d object-it is anything that you can interact or see in a 3d space
-> mesh is the most common type of 3d object-it's made by combbining a geometry and a material
->points are a collection of small dots in a 3d space often used to create effects like stars or particles
->group is a collection of multiple objects
->sprite a 3d object that always faces the camera,it means it will always be visible no matter where we look

---

`Mesh`
A mesh made up of two parts
->geometry
->material

Geometry
defines the shape and structure of a 3D object
it has three properties
-vertices,edges and faces
Vertices are the corner points or positions in 3d space where edges meet,each vertex is a point in a space defined by its coordinates x y and z
Edges are the lines that connect the lines you draw between dots to outline the shape of an object
Faces are the surfaces of an object that are created by connecting edges together

---

`PERSPECTIVE CAMERA`
PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
fov — Camera frustum vertical field of view.
aspect — Camera frustum aspect ratio.
near — Camera frustum near plane.
far — Camera frustum far plane.

Together these define the camera's viewing frustum.

`Hemisphere Lighting`
-provides lighting from above and below the scene simulating light from the sky

---

`div vs section`
The difference between using a `<div>` and a `<section>` in HTML lies in **semantic meaning** and **intended use**:

---

### 🔹 `<div>` — Generic Container

- **Purpose**: A **generic** container with no inherent meaning.
- **Used for**: Grouping elements purely for styling or scripting (with CSS or JavaScript).
- **Semantics**: **None** — it's just a box.
- **Example**:

  ```html
  <div class="sidebar">...</div>
  ```

---

### 🔸 `<section>` — Semantic Section

- **Purpose**: Represents a **thematic grouping of content**, typically with a heading.
- **Used for**: Dividing a page into meaningful sections like “About Us,” “Contact,” “News,” etc.
- **Semantics**: **Yes** — helps search engines, screen readers, and developers understand structure.
- **Example**:

  ```html
  <section>
    <h2>Latest Articles</h2>
    <p>...</p>
  </section>
  ```

---

### ✅ When to Use What

| Use Case                                                 | Use `<div>` | Use `<section>`            |
| -------------------------------------------------------- | ----------- | -------------------------- |
| Pure styling or layout                                   | ✅          | 🚫                         |
| Grouping content **with a heading** and semantic meaning | 🚫          | ✅                         |
| You want better accessibility/SEO                        | 🚫          | ✅                         |
| Building a reusable layout block                         | ✅          | Maybe (depends on content) |

---

`overflow hidden`
When applied to a block-level element (like a div), overflow: hidden:

Hides any child content that spills outside the element’s box.

Prevents scrollbars from appearing.

Commonly used for layout control, clearing floats, or masking overflowing content.
