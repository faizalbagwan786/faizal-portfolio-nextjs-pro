export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-16">
      <div className="container text-sm opacity-70">
        © {new Date().getFullYear()} Faizal Bagwan — Built with Next.js.
        <div className="mt-2">
          <a className="link" href="mailto:faizalmohdrafiquebagwan@gmail.com">faizalmohdrafiquebagwan@gmail.com</a> ·
          <a className="link ml-2" href="https://github.com/faizalbagwan786" target="_blank">GitHub</a> ·
          <a className="link ml-2" href="https://linkedin.com/in/faizalbagwan" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
