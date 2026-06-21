export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <div>
          <p className="text-sm text-zinc-500">
            © 2026 Fadli Yurisman
          </p>

          <p className="mt-1 text-sm text-zinc-600">
            Backend Developer
          </p>
        </div>

        <div className="flex gap-6 text-sm text-zinc-500">

          <a
            href="https://github.com/fadliEvan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/fadli-yurisman-487975355"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:fadliyurisman@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}