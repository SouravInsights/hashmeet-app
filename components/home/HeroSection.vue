<template>
  <c-box as="section" pb="12">
    <c-grid
      :max-w="['90%', '90%', '80rem']"
      :pt="[10, 10, 24]"
      :template-columns="['1fr', '1fr', '1.5fr 1fr']"
      :gap="[10, 12, 14, 16]"
    >
      <c-stack direction="column" spacing="12">
        <c-heading
          font-weight="extrabold"
          line-height="1.2"
          :font-size="['3rem', '3.5rem', '4.5rem']"
        >
          We never grow alone, but always with a
          <c-heading
            as="u"
            font-weight="extrabold"
            line-height="1.2"
            :font-size="['3rem', '3.5rem', '4.5rem']"
            color="#0931C0"
            >Community.</c-heading
          >
        </c-heading>
        <c-text font-weight="normal" font-size="25px">
          At UTF, we thrive to create a true community where everyone can grow
          together.
        </c-text>
        <primary-button
          right-icon="arrow-forward"
          size="lg"
          transform="scale(1.2)"
        >
          Join Our Community
        </primary-button>
      </c-stack>
      <c-box
        :ml="['none', 'none', 12, 12]"
        w="100%"
        aria-describedby="hero-image"
      >
        <c-image
          height="100%"
          mx="auto"
          :width="['100%', '100%', '80%', '80%']"
          src="http://images.ctfassets.net/kn9wi23xyla8/2v8pOYkQ7wcCZ8aU6p9dUL/048719a60cfb64247f5e481d890b862d/hero-image.png"
        />
      </c-box>
    </c-grid>
  </c-box>
</template>