import fse from 'fs-extra';
import path from 'path';
import {execSync} from 'child_process';

let deploy_code = `autodeploy: ${Date.now()}`
let git_url = process.argv[2];

let tmp_folder = path.join(process.cwd(), ".tmp");
let build_folder = path.join(process.cwd(), "build");
let original_git_folder = path.join(tmp_folder, path.parse(git_url).name);
let new_git_folder = path.join(tmp_folder, "newgit");

if (!fse.pathExistsSync(build_folder)) {
	console.log("\nperform a 'npm run build' first");
	process.exit();
}

// ensuring tmp_folder
// keeping original_git_folder to save time
fse.ensureDirSync(tmp_folder);

try {
	// clone original git or pull if exists
	if (fse.pathExistsSync(original_git_folder)) {
		execSync("git pull --no-rebase", {
			stdio: [0, 1, 2],
			cwd: path.resolve(original_git_folder)
		})
	} else {
		execSync("git clone "+git_url, {
			stdio: [0, 1, 2],
			cwd: path.resolve(tmp_folder)
		})
	}
} catch {
	console.log("\nwasn't able to clone. check you connection please");
}


try {
	fse.ensureDirSync(new_git_folder);
	fse.emptyDirSync(new_git_folder);

	// .git and .gitignore
	let dotGit = path.join(original_git_folder, ".git");
	let dotGitignore = path.join(original_git_folder, ".gitignore"); 

	// if .git exists copy to new_git_folder
	if (fse.pathExistsSync(dotGit)) {
		fse.copySync(dotGit ,path.join(new_git_folder, ".git"));
	}
	
	// if .gitignore exists copy to new_git_folder
	if (fse.pathExistsSync(dotGitignore)) {
		fse.copySync(dotGitignore, path.join(new_git_folder, ".gitignore"));
	}

	// copy everyting from build folder to new_git_folder
	fse.copySync(build_folder, new_git_folder);
} catch (error) {
	console.log(error);
}

// perform a git add on new_git_folder
execSync("git add .", {
	stdio: [0, 1, 2],
	cwd: path.resolve(new_git_folder)
});

try {
	// perform a git commit on new_git_folder
	execSync(`git commit -m \"${deploy_code}\"`, {
		stdio: [0, 1, 2],
		cwd: path.resolve(new_git_folder)
	});

	// perform a git push on new_git_folder
	execSync(`git push`, {
		stdio: [0, 1, 2],
		cwd: path.resolve(new_git_folder)
	});
	
	console.log("\nauto deploy done");
	console.log(deploy_code);
} catch {
	console.log("\nbuild doesn't contain anything new so I am not pushing");
}